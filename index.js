const express = require('express'); 
const app = express() ; 
const port = 80 ; 
const postModel = require("./model/posts")
const userModel = require("./model/user")
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');



mongoose.connect("mongodb://localhost:27017/proconnect")
.then(() => 
{
    console.log("Connected to database") ;
})
.catch((err)=>
{
    console.log(err) ; 
})




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//################################ GET POSTS ROUTE ##################################

app.get("/" , async (req,res)=>
{
    if(req.query.search)
    {
        const users = await userModel.findMany({username: req.query.search}) ;
    }  
    const allPosts = await postModel.find({}) ; 
    console.log(allPosts) ; 
    res.send(allPosts) ;
})

//################################ POST POST ROUTE ##################################
app.post("/", async (req,res)=>
{

        try{

            const post = req.body ; 
            console.log(post) ; 
            const newPost = await postModel.create(
                {
                    post_id: post.post_id , 
                    user_id: post.user_id , 
                    content: post.content , 
                    image: post.image
                }
            ) ; 
            console.log(newPost) ; 
        }
        catch(err)
        {
            console.log("404 not found") ;
        }

    // res.send(newPost) ; 
})

//############################# SIGNUP ########################################

app.post("/signup" ,(req,res)=>
{
    const user = req.body ; 
    console.log(user) ;
    const userId = uuidv4().toString() ;
    const newUser = userModel.create(
        {
            user_id: userId , 
            username: user.username , 
            email: user.email , 
            password: user.password , 
            full_name: user.full_name , 
            address: user.address , 
            profile_picture: user.profile_picture
        }
    )
    res.send(newUser) ; 
})

//############################# LOGIN ########################################

app.post("/login", async (req, res) => {
    try {
        const user = req.body;
        console.log("Received user data:", user);

        const userLogin = await userModel.findOne({ email: user.email, password: user.password });

        if (userLogin) 
        {
            res.status(200).json(userLogin); 
        } 
        else 
        {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } 
    catch (err) 
    {
        console.error("Error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});



//############################# GET USER PROFILE AND POSTS ########################################
app.get("/:id",async(req,res) =>
{
    try
    {
        const id = req.params.id ; 
        const userProfile = await userModel.findOne({user_id : id}) ; 
        const posts = await postModel.find({user_id: id}) ;
        res.send({userProfile,posts}) ; 
    }
    catch(err)
    {
        console.log("404 not found")
    }
})





app.listen(port, () => {
    console.log(`Server started ap port ${port}`);
});
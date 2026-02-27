import express from 'express';

const app = express();
const PORT = 7000;      

app.use(express.json());

let users=[
    {
        id:1,
        name:"John Doe",
        email:" johndoe@gmail.com"

    },
    {
        id:2,
        name:"Jane Doe",
        email:"janedoe@gmail.com"   
    }
]

app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);    
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message:"User not found"});
    }   
})

app.listen(PORT,(req)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
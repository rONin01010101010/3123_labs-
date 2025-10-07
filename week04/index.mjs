 import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();



//html static file serve
app.use(express.static(path.join(__dirname, 'public')))

//hello message
app.get('/user' ,(req,res) => {
 res.status(200).send("Hello Express"); 
}) 

//get user information
app.get('/user',(req,res) => {
    const First = req.firstname; 
    const Last = req.lastname; 

    if(First && Last == null){
       res.json({
       "firstname" : "Pritesh",
       "lastname" : "Patel"
       })
    }
   
   res.status(200).json(First,Last); 
}) 

//path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
   const first = req.params.firstname;
   const last = req.params.lastname;  

   res.status(200).json({
    "FirstName": first,
    "LastName": last
   })
})  

//user body 
app.post('/users' , (req,res) => {
    const body = req.body

    res.status(200).json(body);
}) 


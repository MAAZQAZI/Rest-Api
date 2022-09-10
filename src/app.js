const express=require('express');
const app=express();
const validator = require('validator');
const port=process.env.PORT||3000;
require('./db/conn');
const Student=require('./models/students');
const router=require('./routers/student');

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World from the parrallel world</h1>');
// }   );

app.use(router);







//---------------
app.listen(port,'127.0.0.1',()=>{
    console.log('Server is running on port 3000');
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import todoRouter from './routers/todo.js';

const app  = express();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
dotenv.config();
app.use(cors());
app.use('/todos',todoRouter);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res) => {
    // res.send('Welcome to server!!');
    res.render('contacts');
});
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.mongodb).then(() => {
    app.listen(PORT,() => {
        console.log(`server is running on port ${PORT}`);
    });
    
})
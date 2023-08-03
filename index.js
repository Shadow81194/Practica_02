const express=require('express');
const app=express();
const morgan=require('morgan');
const {mongoose}=require('./database');
const router=express.Router();
const cors= require('cors');

router.get('/',(req,res)=>{
 
    res.json({status:'API works'});
   });
   

//SETTINGS
app.set('nombreApp', 'Aplicacion para manejar de gastos SRI');
app.set('puerto', process.env.PORT || 3000);

//MIDDLEWARW
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//ROUTES    
app.use('/api/gastos',require('./routes/server.routes'));


app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Puerto del Servidor', app.get('puerto'));
});

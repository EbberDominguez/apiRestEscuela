//Cargue la conexion del grupo mysql
const pool=require('../data/config');
//Ruta de la app
const router =app=>{
    //Mostrar mensaje de bienvenida de root 
    app.get('/',(request,response)=>{
        response.send({
            message:'Bienvenido a NodeJS Express REST API'
        });

    });
    
    
    module.exports=router;
};

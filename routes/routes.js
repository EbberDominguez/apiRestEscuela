const pool = require ('../data/config');

//ruta de la app
const router = app => {
    //mostrar mensaje de bienveida 
    app.get('/', (request, response)=> {
        response.send ({
            message:'Bienvenido a Node.js Express REST API'
        });
    });
    // --------------------------Usuarios---------------------
    //mostrar todos los usuarios
    app.get('/usuarios', (request, response) => {
        pool.query('SELECT * FROM usuarios', (error, result)=> {
            if (error) throw error;
            response.send(result);
        });
    });
    //mostrar usuarios por id

    app.get('/usuarios/:id', (request, response)=> {
        const id = request.params.id;

        pool.query('SELECT * FROM usuarios WHERE id_usuario = ?',id,(error,result )=> {
            if(error) throw error;
            response.send(result);
        });
    });

    //agregar un nuevo usuario
    app.post('/usuarios',(request,response)=>{
        pool.query('INSERT INTO usuarios SET ?',request.body,(error,result)=>{
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });


    //actualiza un usuario existente 
    app.put('/usuarios/:id', (request, response)=> {
        const id = request.params.id;

        pool.query ('UPDATE usuarios SET ? WHERE id_usuario = ?', [request.body, id],(error, result)=> {
            if (error) throw error;

            response.send(result);

        });
    });


    //Eliminar un usuario 
    app.delete('/usuarios/:id', (request, response)=> {
        const id = request.params.id;

        pool.query('DELETE FROM usuarios WHERE id_usuario = ? ' , id, (error,result)=> {
            if (error)throw error;
            response.send('User deleted');

        });
    });
    // --------------------------Roles---------------------
    //mostrar todos los roles
    app.get('/roles', (request, response) => {
        pool.query('SELECT * FROM roles', (error, result)=> {
            if (error) throw error;
            response.send(result);
        });
    });
  //mostrar rol por id

  app.get('/roles/:id', (request, response)=> {
    const id = request.params.id;

    pool.query('SELECT * FROM usuarios WHERE id_rol = ?',id,(error,result )=> {
        if(error) throw error;
        response.send(result);
    });
});
};

//exporta el router
module.exports=router;
const pool = require ('../data/config');

//ruta de la app
const router = app => {
    //mostrar mensaje de bienveida 
    app.get('/', (request, response)=> {
        response.send ({
            message:'Bienvenido a Node.js Express REST API'
        });
    });
    //mostrar todos los usuarios
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result)=> {
            if (error) throw error;
            response.send(result);
        });
    });
}
//mostrar usuarios por id

app.get('/users/:id', (request, response)=> {
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERW id = "1"',id,(error,result )=> {
        if(error) throw error;
        response.send(result);
    });
});

//agregar un nuevo usuario
app.post('/users',(reuqest,response)=>{
    pool.query('INSERT INTO users (id,name,email) values(1,"pedro","Pedro")',request.body,(error,result)=>{
    if (error) throw error;

    response.status(201).send(`User added with ID: ${result.insertid}`);
    });
});


//actualiza un usuario existente 
app.put('/users/:id', (request, response)=> {
    const id = request.params.id;

    pool.query ('UPDATE users SET id="2" , name ="pedro", email="pedrito@gmail.com" WHERE id = 1', [request.body, id],(error, result)=> {
        if (error) throw error;

        response.send('User Updated Successfuly');

    });
});


//Eliminar un usuario 
app.delete('/users/:id', (request, response)=> {
    const id = request.params.id;

    pool.query('DELETE FROM users WHERE id = ? ' , id, (error,result)=> {
        if (error)throw error;
        response.send('User deleted');

    });
});
//exporta el router
module.exports=router;
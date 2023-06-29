const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id
const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
const bodyParser =require('body-parser')

class insumosInsertar{


    constructor(){}

    async insertMany(body){

        const client=new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('Publigrafit').collection('insumos').insertMany([body]);
            return result
            
        } catch (error) {
            console.log(error)
        }finally {
            await client.close();
        
        }
    }
    async insertarDatos(nombre,precio,cantidad,proveedor,estado){
        const client=new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('Publigrafit').collection('insumos').insertMany([
                {
                "nombre":nombre,
                "precio":precio,
                "cantidad":cantidad,
                "proveedor":proveedor,
                "estado":estado
                }

            ]);
            return result
        } catch (error) {
            console.log(error)
        }finally {
            await client.close();
        }
    }


}

module.exports=insumosInsertar;


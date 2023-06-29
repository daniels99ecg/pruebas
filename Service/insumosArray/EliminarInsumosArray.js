const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id
const uri='mongodb+srv://ANDRES:admin@cluster0.zaeaoqe.mongodb.net/?retryWrites=true&w=majority';
const bodyParser =require('body-parser')

class insumosArrayEliminar{


    constructor(){}

    async deleteOne(id){
        const client=new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('Publigrafit').collection('insumosarray').deleteOne({_id:new ObjectId(id)});
            return result
            } catch (error) {
            console.log(error)
            }finally {
                await client.close();
            
     }
    }
    async deleteMany(body){
        const client=new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db('Publigrafit').collection('insumosarray').deleteMany(body);
            return result
        } catch (error) {
            console.log(error)
        }finally {
            
    }
    }
    
}

       




module.exports=insumosArrayEliminar;

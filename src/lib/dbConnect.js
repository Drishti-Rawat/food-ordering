import mongoose from "mongoose";

const connection = {}

async function dbConnect() {
    if(connection.isConnected){
        console.log("already connected to databases")
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URL || "", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

       connection.isConnected = db.connections[0].readyState
       console.log("db Connected succesfully")

       console.log(db.connections); 

    } catch (error) {
        console.log("db conection failed ",error)
        process.exit()
    }
    
}

export default dbConnect
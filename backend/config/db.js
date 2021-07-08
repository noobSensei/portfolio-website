import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connnetDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected`)
    } catch(err){
        console.log(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connnetDB
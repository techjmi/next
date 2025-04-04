import mongoose from "mongoose"
const URL= process.env.MONGO_URL
const ConnectTodb=async()=>{
    try {
        await mongoose.connect(URL)
        console.log('connection with database')
    } catch (error) {
        console.log('connection failed', error.message)
    }
}
export default ConnectTodb
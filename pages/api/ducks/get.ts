import { connectMongoDuck } from "@/utils/connectMongo"
import { Duck } from "@/models"
import { duck } from "@/interfaces"
import mongoose from "mongoose"
import DuckInt from "@/interfaces/duck"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function getTime(req: any, res: any) {

    console.log('Connecting to DB')
    let db = await connectMongoDuck()
    console.log('Connected to DB')
    console.log('Getting')
    let Schema = new mongoose.Schema({})
    let model: typeof Duck = db.model('Duck', Schema)
    const leek = await model.find({})
    console.log('Got')
    let formatted: Array<duck> = leek;

    res.json({ formatted })
    
}
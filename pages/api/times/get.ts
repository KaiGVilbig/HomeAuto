import { connectMongo } from "@/utils/connectMongo"
import { Time } from "@/models"
import { timeForm } from "@/interfaces"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function getTime(req: any, res: any) {

    console.log('Connecting to DB')
    await connectMongo()
    console.log('Connected to DB')
    console.log('Getting')
    const time = await Time.find({})
    console.log('Got')
    let formatted: Array<timeForm> = time;

    res.json({ formatted })
}
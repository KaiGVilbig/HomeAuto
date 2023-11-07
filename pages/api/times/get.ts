import { connectMongo } from "@/utils"
import { Time } from "@/models"

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
    const time = await Time.findOne(req.body)
    console.log('Got')

    res.json({ time })
}
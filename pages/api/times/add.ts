import { connectMongo } from "@/utils/connectMongo"
import { Time } from "@/models"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addTime(req: any, res: any) {

    console.log('Connecting to DB')
    await connectMongo()
    console.log('Connected to DB')
    console.log('Sending')
    let sendJSON = req.body.formData
    let key: string = "_id"
    delete sendJSON[key]
    const time = await Time.create(sendJSON)
    console.log('Sent')

    res.json({ time })
}
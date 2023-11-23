import { connectMongoSwim } from "@/utils/connectMongo"
import { Time } from "@/models"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function removeTime(req: any, res: any) {

    console.log('Connecting to DB')
    let db = await connectMongoSwim()
    console.log('Connected to DB')
    console.log('Removing')
    // const time = await Time.remove({ _id: req.body.id })
    console.log('Removed')
    db.connection.close()

    // res.json({ time })
}
import { connectMongoSwim } from "@/utils/connectMongo"
import { Time } from "@/models"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// Needs work
export default async function modifyTime(req: any, res: any) {

    console.log('Connecting to DB')
    let db = await connectMongoSwim()
    console.log('Connected to DB')
    console.log('Getting')
    const time = await Time.findOne(req.body, async (err: any, time: any) => {
        if (err) return;

        time.date = req.body.date;
        time.meet = req.body.meet;
        time.unit = req.body.unit;

        await time.save()
    })
    console.log('Got')
    db.connection.close()

    res.json({ time })
}
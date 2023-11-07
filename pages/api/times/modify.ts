import { connectMongo } from "@/utils"
import { Time } from "@/models"

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// Needs work
export default async function modifyTime(req: any, res: any) {

    console.log('Connecting to DB')
    await connectMongo()
    console.log('Connected to DB')
    console.log('Getting')
    const time = await Time.findOne(req.body, (err: any, time: any) => {
        if (err) return;

        time.date = req.body.date;
        time.meet = req.body.meet;
        time.unit = req.body.unit;

        time.save()
    })
    console.log('Got')

    res.json({ time })
}
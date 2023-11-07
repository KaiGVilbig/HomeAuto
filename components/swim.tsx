"use client"
import { useState } from 'react'
import {Modal} from './modal'
import AddTimeForm from './addTimeForm'

function swim() {

    const [open, setOpen] = useState<boolean>(false)

    const handleAddTime = async () => {
        // const res = await fetch('/api/times/add', { 
        //     method: 'POST', 
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }, 
        //     body: JSON.stringify({
        //         'name': 'Bruh',
        //         'distance': 200,
        //         'unit': 'Yards',
        //         'stroke': 'Breaststroke',
        //         'time': {
        //             'minutes': 2,
        //             'seconds': 9,
        //             'miliseconds': 98
        //         },
        //         'age': 22,
        //         'date': {
        //             'month': 12,
        //             'day': 15,
        //             'year': 2021
        //         },
        //         'meet': 'Winters'
        //     })
        // })

        // const data = res.json()
        // console.log(data)
        setOpen(true)
    }

    

    return (
        <div>
            { open && <Modal onClose={() => setOpen(false)}>
                <AddTimeForm />
            </Modal>}
            <div className="container swimContainer">
                <div className="row">
                    Placeholder
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={() => handleAddTime()} />
                </div>
            </div>
        </div>
    )
}

export default swim
"use client"

function swim() {

    const handleAddTime = async () => {
        const res = await fetch('/api/times/add', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                'name': 'Bruh',
                'distance': 200,
                'unit': 'Yards',
                'stroke': 'Breaststroke',
                'time': {
                    'minutes': 2,
                    'seconds': 9,
                    'miliseconds': 98
                },
                'age': 22,
                'date': {
                    'month': 12,
                    'day': 15,
                    'year': 2021
                },
                'meet': 'Winters'
            })
        })

        const data = res.json()
        console.log(data)
    }

    return (
        <div className="container swimContainer">
            <div className="row">
                Placeholder
            </div>
            <div className="row">
                <button className="btn btn-success" onClick={() => handleAddTime()} />
            </div>
        </div>
    )
}

export default swim
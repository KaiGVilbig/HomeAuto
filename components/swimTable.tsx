"use client"
import React, { useState, useEffect } from 'react'
import { timeForm } from '@/interfaces'
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/react";

const headers: Array<string> = ["NAME", "STROKE", "DISTANCE", "UNIT", "TIME", "DATE", "AGE"]

function swimTable() {

    const [times, setTimes] = useState<Array<timeForm>>([])
    const [gotTimes, setGotTest] = useState<boolean>(false)

    useEffect(() => {
        if (gotTimes) return;
        const getTimes = async () => {
            const res = await fetch('/api/times/get', { 
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
            })
            let ret = res.json().then((data) => {
                console.log(data)
                setTimes(data.formatted)
            })

            setGotTest(true)
        }

        getTimes()
    }, [times, gotTimes])

    return (
        <Table isStriped>
            <TableHeader>
                {headers.map((header, index) => 
                    <TableColumn key={index}>{header}</TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
                {times.map((time, index) =>
                    <TableRow key={index}>
                        <TableCell>{time.name}</TableCell>
                        <TableCell>{time.stroke}</TableCell>
                        <TableCell>{String(time.distance)}</TableCell>
                        <TableCell>{time.unit}</TableCell>
                        <TableCell>{`${Number(time.time.minutes) > 0 ? `${time.time.minutes}:` : ''}${
                            Number(time.time.seconds) < 10 ? `0${time.time.seconds}` : time.time.seconds}.${
                            Number(time.time.miliseconds) < 10 ? `0${time.time.miliseconds}` : time.time.miliseconds}`}</TableCell>
                        <TableCell>{`${time.date.month}/${time.date.day}/${time.date.year}`}</TableCell>
                        <TableCell>{String(time.age)}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default swimTable
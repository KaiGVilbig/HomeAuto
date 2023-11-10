"use client"
import React, { useState, useEffect, useMemo } from 'react'
import { timeForm } from '@/interfaces'
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/react";
import style from '@/styles/Swim.module.css'

const headers = [
    {key: "name", label: "NAME"}, 
    {key: "stroke", label: "STROKE"}, 
    {key: "distance", label: "DISTANCE"}, 
    {key: "unit", label: "UNIT"}, 
    {key: "time", label: "TIME"}, 
    {key: "date", label: "DATE"},
    {key: "age", label:  "AGE"}]

export function swimTable() {

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

    const handleSort = (sortBy: string) => {
        console.log(sortBy)
    }

    const classNames = useMemo(
        () => ({
            wrapper: ["max-h-[382px]", "max-w-3xl"],
            table: [style.table],
            thead: [style.head],
            tbody: [style.body],
        }), []
    )

    return (
        <Table removeWrapper classNames={classNames}>
            <TableHeader columns={headers}>
                {(column) => <TableColumn key={column.key} className={style.col}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody className={style.bod}>
                {times.map((time, index) =>
                    <TableRow key={index} className={style.row}>
                        <TableCell className={style.td}>{time.name}</TableCell>
                        <TableCell className={style.td}>{time.stroke}</TableCell>
                        <TableCell className={style.td}>{String(time.distance)}</TableCell>
                        <TableCell className={style.td}>{time.unit}</TableCell>
                        <TableCell className={style.td}>{`${Number(time.time.minutes) > 0 ? `${time.time.minutes}:` : ''}${
                            Number(time.time.seconds) < 10 ? `0${time.time.seconds}` : time.time.seconds}.${
                            Number(time.time.miliseconds) < 10 ? `0${time.time.miliseconds}` : time.time.miliseconds}`}</TableCell>
                        <TableCell className={style.td}>{`${time.date.month}/${time.date.day}/${time.date.year}`}</TableCell>
                        <TableCell className={style.td}>{String(time.age)}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default swimTable
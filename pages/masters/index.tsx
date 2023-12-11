import React from 'react'
import style from '@/styles/Masters.module.css'
import SwimTable from '@/components/SwimTable'
import Chart from '@/components/Chart'

function Masters() {
  return (
    <div className={style.master}>
        <h1 className={style.title}>Masters Times</h1>
        <div className={`container-fluid ${style.cont}`}>
            <div className={`row`}>
                <div className={`col ${style.events}`}>
                    Events
                </div>
                <div className={`col ${style.chart}`}>
                    <Chart />
                </div>
            </div>
            <div className={`row ${style.table}`}>
                <SwimTable />
            </div>
        </div>
    </div>
  )
}

export default Masters
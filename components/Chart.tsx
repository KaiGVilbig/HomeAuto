import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from 'chart.js'
import { Chart, Line } from 'react-chartjs-2'
import { timeForm } from '@/interfaces'
import { useAppSelector } from '@/pages/redux/store'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type Label = {
  date: string,
  dateNum: number
}

function SwimChart() {

  const [labels, setLabels] = useState<Array<string>>([])
  const [dataSet, setDataSet] = useState<Array<number>>([]);
  const [sort, setSort] = useState<string>('name')  

  let times: Array<timeForm> = useAppSelector((state) => state.swimReducer.value.times)

  useEffect(() => {
    let dates: Array<Label> = times.map((t: timeForm) => {
      return {
        date: t.date.month + '/' + t.date.day + '/' + t.date.year,
        dateNum: t.date.year * 10000 + t.date.month * 100 + t.date.day
      }
    });

    dates = dates.sort((a: Label, b: Label) => (a < b ? 1 : -1))
    setLabels(dates.map((d: Label) => d.date))

    let time: Array<number> = times.map((t: timeForm) => {
      return t.time.minutes * 60 + t.time.seconds + t.time.miliseconds / 100
    })

    setDataSet(time)

  }, [times])
  
  let data = {
    // dates
    labels: labels,
    // times
    datasets: [
      {
        data: dataSet
      }
    ]
  }

  const options: any = {
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            console.log(context)
            let minNum: number = Math.floor(context.raw / 60);
            let minSec: number = minNum * 60;
            let min: string = minNum > 0 ? String(minNum) + ':' : ''
            let sec: string = context.raw - minSec >= 10 ? String((context.raw - minSec).toFixed(2)) : '0' + String((context.raw - minSec).toFixed(2))
            return min + sec
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: 'blue',
        fill: "start",
        backgroundColor: "white"
      },
      point: {
        radius: 5,
        hitRadius: 20,
        label: 'bruh'
      }
    },
    scales: {
      y:
        {
          ticks: {
            callback: function(value: number, index: number, ticks: any) {
              let min: string = Math.floor(value / 60) > 0 ? String(Math.floor(value / 60)) + ':' : ''
              let sec: string = value % 60 >= 10 ? String(value % 60) : '0' + String(value % 60)
              return min + sec
            }
          },
          
        }
    }
  }

  return (
    <div>
        <Line data={data} width={100} height={40} options={options} />
    </div>
  )
}

export default SwimChart
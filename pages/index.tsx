import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
// import "./globals.css";
import style from '@/styles/Home.module.css'
// import { Weather, Swim } from '@/components'
import Weather from '@/components/Weather'
import Swim from '@/components/Swim'
import CheckLeekDuck from '@/components/CheckLeekDuck';

export default function Home() {
  return (
    <main>
      <h1 className={style.title}>
        The Kai Kassie House&nbsp;
      </h1>
      <div className="container">
        <div className="row">
          <Weather />
        </div>
        <div className="row">
          <div className="col-sm">
            <Swim />
          </div>
          <div className="col-sm">
            <CheckLeekDuck />
          </div>
        </div>
      </div>
    </main>
  )
}

import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
// import "./globals.css";
import styles from '@/styles/Home.module.css'
import { Weather, Swim } from '../components'


export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>
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
          <div className="col-sm"></div>
        </div>
      </div>
    </main>
  )
}

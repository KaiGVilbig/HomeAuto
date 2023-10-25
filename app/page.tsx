import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Container } from 'postcss';
// import "../styles/globals.css";
import Weather from "./getWeather"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          The Kai Kassie House&nbsp;
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Weather />
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    </main>
  )
}

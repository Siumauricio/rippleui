import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
     <button className='btn top-7'>
      Click me
     </button>
     <input type="text" className='input top-7  content-auto '/>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import img from '../public/c2560px-join-or-die.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    <h1>Home page</h1>
    <Image src={img} placeholder='blur' alt="Join or Die" width={2560} height={1705} />
   </>
  )
}

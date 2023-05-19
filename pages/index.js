
import Image from 'next/image'
// import Logo from '../Components/Logo'
import Snake from '../Components/Snake'
import Square from '../Components/Square'

import Benjamin from '../Components/benjamin'
import Flexbox from '../Components/Flexbox'
import Speech from '../Components/Speech'

import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <>
    <div>
      <div><Snake /></div>
      <div><Square /></div>
      <div><Flexbox /></div>
     
      <div><Benjamin /></div>
      <div><Speech /></div>
    
      <div>
        <footer className={styles.footerWave}>
      
          <p>&copy;2023 Non-Partisan Alliance Inc. | All Rights Reserved</p>
          
        </footer>
      </div>
     
    </div>
      </>
  )
}
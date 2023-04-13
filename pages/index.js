
// import Image from 'next/image'
// import img from '../public/Join-or-Die-no-frame-1920.png'

// import logo from '../public/NON-PARTISAN-LOGO.png'

import styles from '../styles/Home.module.css'
import Styles from '../styles/Home.module.css'
export default function Home() {
  

  return (
    <>
      {/* <div className={styles.brand}><Image src={logo} alt="LOGO" /></div>
      <div className={styles.hero}><Image src={img} alt="Join or Die" /></div> */}
     
     <div>
        <video className={styles.container} src={require('/public/1.mp4')} autoPlay muted controls />
     </div>
    </>
   
  )
} 

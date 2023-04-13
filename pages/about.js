import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/NON-PARTISAN-LOGO.png'

export default function About() {
  return (
    <>
      {/* <div className={styles.brand}><Image src={logo} alt="LOGO" /></div>
      <div className={styles.hero}><Image src={img} alt="Join or Die" /></div> */}
     <div className={`${styles.brand}`}>
        <Image src={logo} alt="LOGO" />
     </div>

     {/* <div className="z-index-1 position-absolute w-25">
        <Image src={logo} alt="LOGO" />
     </div> */}
     
     <div>
        <video className="container-fluid" src={require('/public/1.mp4')} autoPlay muted controls />
     </div>
     {/* <button className="btn btn-primary">Go somewhere</button> */}

     <button className={`${styles.collection} btn`}>Go somewhere</button>
    </>
   
  )
}

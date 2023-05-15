import React from 'react'
import styles from '../styles/Home.module.css';


function Testimonials() {


  return (

   <div className={styles.testimonialsBox}>
    
    <div className={styles.t1}>
      <div className={styles.avatar1}></div>
      <p><span className={styles.name}>Kevin M.</span></p>

      <p>"I did not know that I have been using Artifical Intelligent-manuipulated online platform for discussing serious political issues, until I have found what Non-Partisan Alliance Inc. is building."</p>
    </div>
    
    <div className={styles.t2}>
      <div className={styles.avatar2}></div>
        <p><span className={styles.name}>Donald L.</span></p>
        <p>"Non-Partisan Alliance Inc. opened my eyes to the richness of political perspectives beyond what algorithms dictate. They've shown me the beauty of embracing the diverse spectrum of ideas and encouraging respectful dialogue.</p>
      </div>
    
    <div className={styles.t3}>
      <div className={styles.avatar3}></div>
        <p><span className={styles.name}>Emma A.</span></p>
        <p>Non-Partisan Alliance Inc. taught me the importance of embracing diversity while avoiding extremism. Their commitment to fostering a balanced dialogue has helped me gain a deeper understanding of complex issues facing our nation.</p>
      </div>
    
   </div>
    
  )
}  

export default Testimonials
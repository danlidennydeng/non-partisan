import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

function Testimonials() {


  return (
  
   <div className={styles.testimonialsBox2}>
    <div className={styles.t1}>
      <div className={styles.avatar4}></div>
        <p><span className={styles.name}>Donald L.</span></p>
        <p>"I did not know that I have been using Artifical Intelligent-manuipulated online platform for discussing serious political issues, until I have found what Non-Partisan Alliance Inc. is building."</p>
    </div>

    <div className={styles.t2}>
      <div className={styles.avatar5}></div>
        <p><span className={styles.name}>Donald L.</span></p>
        <p>"We are cultivating open-mindedness, bridging divides, building understanding, empowering American voters, and promoting Freedom of Speech"</p>
      </div>

    <div className={styles.t3}>
      <div className={styles.avatar6}></div>
        <p><span className={styles.name}>Donald L.</span></p>
        <p>"We are establishing a clean and professional online political discussion forum"</p>
      </div>
    
   </div>
    
  )
}  

export default Testimonials
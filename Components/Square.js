import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';
import Logo from '../Components/Logo';

import Link from 'next/link';

function Square() {


  return (
    

   <div className={styles.squareBox}>
    
    <div className={styles.square1}>
      <div className={styles.logoPosition}>
        <Logo />
      </div>
        
        <p className={styles.textPosition}>NPA is registered in the State of Delaware,<br /> 
        operates exclusively in U.S.A.</p>
      
    </div>

    <div className={styles.square2}>
      <p><span className={styles.npa}>NPA</span></p>
      
      <p>establishing a clean, professional<br />
        political discussion<br />
        online forum</p>
    </div>
    
    <div className={styles.square3}>

        <Link href="#volunteer"><span className={styles.joinText}>Join</span></Link> or ...<br />
        <span className={styles.emailText}>support<div className={styles.smallLogo}></div>non-partisan.online</span>
    </div>

   </div>
    
  )
}  

export default Square
import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';
import Logo from '../Components/Logo';

function Square() {


  return (
    

   <div className={styles.squareBox}>
    <div className={styles.square1}>
      <div className={styles.logoPosition}>
        <Logo />
      </div>
        
        registered in State of Delaware<br /> 
        operates exclusively in U.S.A.
      
    </div>
    <div className={styles.square2}>
    <p>We are establishing...</p>
      
        <p>a clean, professional<br />
        political discussion<br />
        online forum</p>
        </div>
    
        <div className={styles.square3}>
          <span className={styles.joinText}>Join</span> or ...<br />
          <span className={styles.emailText}>support<div className={styles.smallLogo}></div>non-partisan.online</span>
        </div>
   </div>
    
  )
}  

export default Square
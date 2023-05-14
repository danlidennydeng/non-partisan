import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

function Square() {


  return (
    

   <div className={styles.squareBox}>
    <div className={styles.square1}>
      <p>Non-Partisan<br /> Alliance Inc.</p>
        
        <p>non-profit organization<br />
        registered in State of Delaware<br /> 
        operates exclusively in U.S.A.
        </p>
    </div>
    <div className={styles.square2}>
    <p>We are establishing...</p>
      
        <p>a clean, professional<br />
        political discussion<br />
        online forum</p>
        </div>
    
        <div className={styles.square3}>
          Join or ...<br />
          <span className={styles.emailText}>support@non-partisan.online</span>
        </div>
   </div>
    
  )
}  

export default Square
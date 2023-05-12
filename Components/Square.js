import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

function Square() {


  return (
    

   <div className={styles.squareBox}>
    <div className={styles.square1}>
      <p>Non-Partisan Alliance</p>
        <ul>
        <li>non-profit</li> 
        <li>registered in Delaware</li> 
        <li>operates in U.S.A.</li>
        </ul>
    </div>
    <div className={styles.square2}>
    <p>We are establishing...</p>
      <ul>
        <li>a clean, professional</li>
        <li>political discussion</li>
        <li>online forum</li>
        </ul>
        </div>
    
        <div className={styles.square3}>
          Join or ...<br />
          <span className={styles.emailText}>support@non-partisan.online</span>
        </div>
   </div>
    
  )
}  

export default Square
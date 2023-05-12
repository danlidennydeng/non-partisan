import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

function Square() {


  return (
    

   <div className={styles.whoweareBox}>
    <div className={styles.square1}>
      <ul>Non-Partisan Alliance
        <p></p>
        <li>non-profit</li> 
        <li>registered in Delaware</li> 
        <li>operates in U.S.A.</li>
        </ul>
    </div>
    <div className={styles.square2}>
      <ul>We are establishing...
        <p></p>
        <li>a clean, professional</li>
        <li>political discussion</li>
        <li>online forum</li>
        </ul>
        </div>
    
   </div>
    
  )
}  

export default Square
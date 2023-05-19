import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

function Instruction() {


  return (
    

   <div className={styles.instructionBox}>
    <div className={styles.snakeAvatar}></div>
    <p className={styles.snakeText}>Please drag me, join me, and revive me! @Fellow Americans</p>
    
   </div>
    
  )
}  


export default Instruction
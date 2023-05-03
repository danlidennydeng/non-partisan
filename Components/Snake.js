import React, {useRef} from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';
import Instruction from '../Components/Instruction';

function Snake() {
  const parentRef = useRef();

  return (
    

    <div className={styles.snakebox} ref={parentRef}>
    
      <motion.div className={styles.snake1} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake2} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake3} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake4} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake5} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake6} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake7} drag dragConstraints={parentRef}></motion.div>
      <motion.div className={styles.snake8} drag dragConstraints={parentRef}></motion.div>
      <Instruction />
    </div>
    
  )
}  


export default Snake
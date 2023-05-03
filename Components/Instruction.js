import React, {useRef} from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';

function Instruction() {
  const parentRef = useRef();

  return (
    

   <div className={styles.instructionBox}>
    <p>Our snake is broken. Can you drag up each piece and put them back togather?</p>
    {/* <p>This instruction box will fade away automatically in 20 seconds</p> */}
   </div>
    
  )
}  


export default Instruction
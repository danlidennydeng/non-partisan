import React from 'react';
// import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Image from 'next/image';
import paypalImg from '../public/paypal.png';

function Volunteer() {

  return (
    
   <div className={styles.volunteerBox}>
    
    <div id="volunteer">
      <h2>Passionate Volunteers Wanted:</h2>
      <div>Only work a few hours a week. Students are welcome! Must be a self-motivated individual.</div>
      <p></p>
      <div className={styles.jobs}>Online Marketing Executive</div>
      <p></p>
      <div className={styles.jobs}>Fund Raising Manager</div>
      <p></p>
      <div>Please email your resume to:<br /> <span className={styles.emailTextSmall}>coreteam<div className={styles.smallLogo}></div>non-partisan.online</span></div>
    </div>
    
    <div>
      <h2>Generous Donations Wanted:</h2>
      <div>Please donate to our paypal account: 
        <br />
        <br />
        
        <div className={styles.paypal}>
          <Link href="https://www.paypal.com"><a target={"_blank"}><Image src={paypalImg} alt="paypal" /></a></Link>
        </div>
    
        
        <div>
          <span className={styles.emailTextSmall}>fundraising<div className={styles.smallLogo}></div> non-partisan.online</span>
        </div>
      </div>
    </div>
    
   </div>
    
  )
}  

export default Volunteer
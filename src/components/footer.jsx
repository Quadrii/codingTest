import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { RiPieChart2Fill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
        <div className={styles.footerdata}>
            <Link to='/' className={styles.item}>
            <IoMdHome className={`${styles.iconmenu} ${styles.active}`}/>
            </Link>
            <Link to='/' className={styles.item}>
            <RiPieChart2Fill className={styles.iconmenu}/>
            </Link>
            <Link to='/' className={styles.item}>
            <BsChatRightText className={styles.iconmenu}/>
            </Link>
            <Link to='/' className={styles.item}>
            <FaWallet className={styles.iconmenu}/>
            </Link>
        </div>
    </footer>
  )
}

export default Footer
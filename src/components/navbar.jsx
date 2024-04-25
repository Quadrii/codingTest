import React from 'react'
import styles from './navbar.module.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import profileimg from '../images/profile.jpg'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoWater } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
      <div className={styles.web}>
        <div className={styles.navwrap}>
          <div className={styles.rightmenu}>
            <div className={styles.search}>
              <IoSearch className={styles.searcIcon}/>
              <input type="text" placeholder="search..." className={styles.input}/>
            </div>
            <div className={styles.listwrap}>
              <Link to='/' className={styles.anchor}>
                <div className={styles.lists}>Feedback</div>
              </Link>
              <Link to='/feedback' className={styles.anchor}>
                <div className={styles.lists}>Contacts</div>
              </Link>
              <Link to='/help' className={styles.anchor}>
                <div className={styles.lists}>Help</div>
              </Link>
            </div>
          </div>
          <div className={styles.leftmenu}>
            <div className={styles.notifications}>
              <IoIosNotificationsOutline className={styles.bell}/>
              <span className={styles.notificationcount}>1</span>
            </div>
            <div className={styles.profilewrap}>
              <img src={profileimg} alt="profile" />
            </div>
          </div>
        </div>
      </div>    

      <div className={styles.mobile}>
        <div className={styles.navwrap}>
          <div className={styles.rightmenu}>
            <Link to='/' className={styles.item}>
              <IoWater className={`${styles.iconmenu} ${styles.logo}`}/>
            </Link>
          </div>
          <div className={styles.leftmenu}>
            <div className={styles.notifications}>
              <IoIosNotificationsOutline className={styles.bell}/>
              <span className={styles.notificationcount}>1</span>
            </div>
            <div className={styles.profilewrap}>
              <img src={profileimg} alt="profile" />
            </div>
          </div>
        </div>
      </div>    

    </>
  )
}

export default Navbar
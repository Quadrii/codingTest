import React from 'react'
import Sidebar from './Sidebar'
import styles from './layout.module.css'

const Layout = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.layoutwrap}>
        <div className={styles.contentwrapper}>
          <div className={styles.sidebarwrapper}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
import React from 'react'
import styles from './layout.module.css'
import Footer from './footer'

const Layoutmobile = (props) => {
  return (
    <div className={styles.layoutmobilewrap}>
        <div className={styles.contentwrapper}>
          <div className={styles.content}>
            {props.children}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layoutmobile
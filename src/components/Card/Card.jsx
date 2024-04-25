import React from 'react'
import styles from './card.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tinydata } from '../../data';

const Card = (props) => {
  return (
    <>
      <div className={styles.cardwraps}>
        <div className={styles.chartInfo}>
          <div className={styles.chart}>
            <ResponsiveContainer width="100%" height={40}>
              <LineChart width={300} height={100} data={tinydata}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={styles.numbers}>
            <div className={styles.title}>
              {props.title}
            </div>
            <div className={styles.number}>
              <h5>{props.number}</h5>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card;
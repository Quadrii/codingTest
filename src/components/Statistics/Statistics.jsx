import React from 'react'
import styles from './statistics.module.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { barData } from '../../data';



const Statistics = () => {
  return (
    <>
      <div className={styles.webstats}>
        <div className={styles.statswrap}>
          <div className={styles.heading}>
              <div className={styles.title}>
                <h2>Statistics</h2>
              </div>
              <div className={styles.dropdown}>
                <form>
                  <select name="year" id="year" className={styles.select}>
                    <option value="">Year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </form>
              </div>
          </div>
          <div className={styles.barchart}>
            <div className={styles.chart}>
              <ResponsiveContainer width="99%" height={300}>
                <BarChart
                  width={500}
                  height={300}
                  data={barData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip contentStyle={{border:"none"}}/>
                  <Bar dataKey="pv" stackId="a" fill="#052e2e" />
                  <Bar dataKey="amt" stackId="a" fill="#13259e" />
                  <Bar dataKey="uv" fill="#1c6c6c " />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className={styles.statsmobile}>
        <div className={styles.statswrap}>
          <div className={styles.heading}>
              <div className={styles.title}>
                <h2>Statistics</h2>
              </div>
              <div className={styles.dropdown}>
                <form>
                  <select name="year" id="year" className={styles.select}>
                    <option value="">Year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </form>
              </div>
          </div>
          <div className={styles.barchart}>
            <div className={styles.chart}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  width={500}
                  height={300}
                  data={barData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="pv" stackId="a" fill="#052e2e" />
                  <Bar dataKey="amt" stackId="a" fill="#13259e" />
                  <Bar dataKey="uv" fill="#1c6c6c " />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Statistics;
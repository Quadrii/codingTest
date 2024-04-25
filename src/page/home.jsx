import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/Layout'
import styles from './home.module.css'
import Card from '../components/Card/Card'
import Statistics from '../components/Statistics/Statistics'
import cloud from '../images/cloud.jpg'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tinysdata } from '../data'
import user from '../images/budget.jpg'
import atmcard from '../images/card.png'
import { FaCirclePlay } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import Piechat from '../components/Piechart/Piechat'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineLocalTaxi } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { RiNetflixFill } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import Layoutmobile from '../components/Layoutmobile'
import Footer from '../components/footer'

export const Home = () => {
  const [showStats, setShowStats] = useState(true)
  const [showTransactions, setShowTransactions] = useState(false)

  const showStatsHandler = () => {
    setShowStats(!showStats)
    setShowTransactions(false)
  }


  const showTransactionHandler = () => {
    setShowTransactions(!showTransactions)
    setShowStats(false)
  }
  return (
    <>
    <div className={styles.webhomes}>
      <Layout>
        <Navbar />
        <div className={styles.homewrapper}>
          <div className={styles.stats}>
            <div className={styles.cards}>
              <Card title="visitors" number="10,320"/>
              <Card title="customers" number="4,628"/>
              <Card title="orders" number="2,980" className={styles.lastcard}/>
            </div>
            <div>
              <Statistics />
            </div>
            <div className={styles.gridbox}>
              <div className={styles.box}>
                <div className={styles.imgwrap}>
                  <img src={cloud} alt="" className={styles.cloudimg}/>
                  <div className={styles.gridtitle}>
                    <h3 className={styles.titled}>Spent time</h3>
                  </div>
                  <div className={styles.timespent}>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                      width={500}
                      height={300}
                      data={tinysdata}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="name" />
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                  <div className={styles.budget}>
                    <div>
                      <img src={user} alt="" className={styles.userphoto}/>
                    </div>
                    <div className={styles.userInfo}>
                      <h3 className={styles.username}>Lilly Donovan</h3>
                      <p className={styles.title}>Business Trainer</p>
                    </div>
                  </div>
                  <div>
                    <h4 className={styles.lesson}>How to properly and manage your personal budget?</h4>
                  </div>
                  <div className={styles.session}>
                    <div className={styles.detail}>
                      <FaCirclePlay className={styles.icon}/>
                      <span>Video</span>
                    </div>
                    <div className={styles.detail}>
                      <FaClock className={styles.icons}/>
                      <span>15 min</span>
                    </div>
                    <div className={styles.detail}>
                      <FaStar className={styles.likes}/>
                      <span>12 likes</span>
                    </div>
                  </div>
                  <div className={styles.connect}>
                      <div className={styles.days}>
                        5 days ago
                      </div>
                      <div className={styles.connectbtn}>
                        <button type='btn' className={styles.cbtn}>
                          Connect
                          <span><IoIosArrowForward /></span>
                        </button>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className={styles.transactions}>
            <div className={styles.edits}>
              <div></div>
              <div><CiEdit /></div>
              <div className={styles.value}>
                <h4>$10,600</h4>
              </div>
            </div>
            <div className={styles.piechart}>
              <div className={styles.bigcircle}>
                <div className={styles.piechat}>
                  <div className={styles.smallpie}>
                    <h2>30%</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.table}>
                <div className={styles.gridata}>
                  <h4>My card</h4>
                  <span><HiOutlineDotsHorizontal /></span>
                </div>
                <div className={styles.cardwrap}>
                  <img src={atmcard} alt="atmcard" />
                </div>
                <div className={styles.tabili}>
                    <div className={styles.infor}>
                      <div className={styles.namee}>
                        <h4>Transactions</h4>
                      </div>
                      <div className={styles.plusign}>
                        <FaPlus className={styles.icontabil}/>
                      </div>
                    </div>
                    <div className={styles.tabiliinfo}>
                      <div className={styles.iconwrap}>
                        <MdOutlineLocalTaxi className={styles.icontabili} />
                        <div className={styles.span}> 
                          <h4>Taxi</h4>
                          <span className={styles.timed}>01:28PM</span>
                        </div>
                      </div>
                      <div className={styles.cash}>
                        <span>-$9.20</span>
                      </div>
                    </div>
                    <div className={styles.tabiliinfo}>
                      <div className={styles.iconwrap}>
                        <IoBag className={styles.icontabili} />
                        <div className={styles.span}> 
                          <h4>Shopping</h4>
                          <span className={styles.timed}>11:15AM</span>
                        </div>
                      </div>
                      <div className={styles.cash}>
                        <span>-$142.00</span>
                      </div>
                    </div>
                    <div className={styles.tabiliinfo}>
                      <div className={styles.iconwrap}>
                        <RiNetflixFill className={styles.icontabili} />
                        <div className={styles.span}> 
                          <h4>Netflix</h4>
                          <span className={styles.timed}>Jan 10, 2020</span>
                        </div>
                      </div>
                      <div className={styles.cash}>
                        <span>-$24.99</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
      
      <div className={styles.mobilehome}>
        <Layoutmobile>
          <Navbar />
          <div className={styles.togglswitch}>
            <div className={`${styles.statsticss} ${showStats && styles.active}`} onClick={showStatsHandler}>
              <MdOutlineBarChart />
            </div>
            <div className={`${styles.transactionss} ${showTransactions && styles.active}`} onClick={showTransactionHandler}>
              <FaRegCreditCard />
            </div>
          </div>

          <div className={styles.homewrapper}>
              <div className={styles.stats}>
                {
                  showStats 
                  &&  
                  <div>
                    <div className={styles.cards}>
                      <Card title="visitors" number="10,320"/>
                      <Card title="customers" number="4,628"/>
                      <Card title="orders" number="2,980" className={styles.lastcard}/>
                    </div>
                    <div>
                      <Statistics />
                    </div>
                    <div className={styles.gridbox}>
                      <div className={styles.box}>
                        <div className={styles.imgwrap}>
                          <img src={cloud} alt="" className={styles.cloudimg}/>
                          <div className={styles.gridtitle}>
                            <h3 className={styles.titled}>Spent time</h3>
                          </div>
                          <div className={styles.timespent}>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart
                                width={500}
                                height={300}
                                data={tinysdata}
                                margin={{
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <XAxis dataKey="name" />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                      <div className={styles.box}>
                          <div className={styles.budget}>
                            <div>
                              <img src={user} alt="" className={styles.userphoto}/>
                            </div>
                            <div className={styles.userInfo}>
                              <h3 className={styles.username}>Lilly Donovan</h3>
                              <p className={styles.title}>Business Trainer</p>
                            </div>
                          </div>
                          <div>
                            <h4 className={styles.lesson}>How to properly and manage your personal budget?</h4>
                          </div>
                          <div className={styles.session}>
                            <div className={styles.detail}>
                              <FaCirclePlay className={styles.icon}/>
                              <span>Video</span>
                            </div>
                            <div className={styles.detail}>
                              <FaClock className={styles.icons}/>
                              <span>15 min</span>
                            </div>
                            <div className={styles.detail}>
                              <FaStar className={styles.likes}/>
                              <span>12 likes</span>
                            </div>
                          </div>
                          <div className={styles.connect}>
                              <div className={styles.days}>
                                5 days ago
                              </div>
                              <div className={styles.connectbtn}>
                                <button type='btn' className={styles.cbtn}>
                                  Connect
                                  <span><IoIosArrowForward /></span>
                                </button>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                }

                {
                  showTransactions 
                  &&
                  <div>
                    <div className={styles.transactions}>
                      <h2 className={styles.sales}>Total Sales</h2>
                      <div className={styles.edits}>
                        <div></div>
                        <div><CiEdit /></div>
                        <div className={styles.value}>
                          <h4>$10,600</h4>
                        </div>
                      </div>
                      <div className={styles.piechart}>
                        <div className={styles.bigcircle}>
                          <div className={styles.piechat}>
                            <div className={styles.smallpie}>
                              <h2>30%</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.table}>
                          <div className={styles.gridata}>
                            <h4>My card</h4>
                            <span><HiOutlineDotsHorizontal /></span>
                          </div>
                          <div className={styles.cardwrap}>
                            <img src={atmcard} alt="atmcard" />
                          </div>
                          <div className={styles.tabili}>
                              <div className={styles.infor}>
                                <div className={styles.namee}>
                                  <h4>Transactions</h4>
                                </div>
                                <div className={styles.plusign}>
                                  <FaPlus className={styles.icontabil}/>
                                </div>
                              </div>
                              <div className={styles.tabiliinfo}>
                                <div className={styles.iconwrap}>
                                  <MdOutlineLocalTaxi className={styles.icontabili} />
                                  <div className={styles.span}> 
                                    <h4>Taxi</h4>
                                    <span className={styles.timed}>01:28PM</span>
                                  </div>
                                </div>
                                <div className={styles.cash}>
                                  <span>-$9.20</span>
                                </div>
                              </div>
                              <div className={styles.tabiliinfo}>
                                <div className={styles.iconwrap}>
                                  <IoBag className={styles.icontabili} />
                                  <div className={styles.span}> 
                                    <h4>Shopping</h4>
                                    <span className={styles.timed}>11:15AM</span>
                                  </div>
                                </div>
                                <div className={styles.cash}>
                                  <span>-$142.00</span>
                                </div>
                              </div>
                              <div className={styles.tabiliinfo}>
                                <div className={styles.iconwrap}>
                                  <RiNetflixFill className={styles.icontabili} />
                                  <div className={styles.span}> 
                                    <h4>Netflix</h4>
                                    <span className={styles.timed}>Jan 10, 2020</span>
                                  </div>
                                </div>
                                <div className={styles.cash}>
                                  <span>-$24.99</span>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
                }
              </div>
          </div> 
        </Layoutmobile>
      </div>
    </>
  )
}

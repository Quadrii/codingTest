import React from 'react'

const test = () => {
  return (
    <div>
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
  )
}

export default test
import style from '../styles/Home.module.css'
import styles from '../styles/Body.module.css'





export default function Body() {
  return (<div style={{height:'100vh',width:'100wh'}} className={style.bgimage}>
          <div className={styles.bitbot}>
                    <form>
                              <input type="Number"  min="2.5" placeholder='plance bit' className={styles.placebid}>
                                        
                              </input>
                              <div className={styles.bitbuttonr}>
                              <button  type="submit" className={styles.bitbuttony}><p className={styles.textbid}>bid</p></button>
                              </div>
                    </form>
                    <div >
                              <div className={styles.textbit1}>
                              Current bid: 100 Kub
                              </div>
                              <div className={styles.textbit2}>
                              Time Left
                              </div>
                              <div className={styles.textbox}>
                              <ul>
                              <li className={styles.li}><span className={styles.spanx} id="hours">12</span>hr</li>
                              <li className={styles.li}><span className={styles.spanx} id="minutes">00</span>min</li>
                              <li className={styles.li}><span className={styles.spanx} id="seconds">59</span>sec</li>
                              </ul>
                              </div>
                    </div>
          </div>
          <div className={styles.imgchecken}>
                    
          <div className={styles.imgbackbocky}>
          <div  type="submit" className={styles.imgbackbockr}>
                    <div><img src='checknf.png' className={styles.imgposition} /></div>
                    <div className={styles.textokenid}>
                    TokenID: 001
                    </div>
          </div>
          
          </div>
          </div>
          <div>

         
          
          </div>
    </div>
  )
}
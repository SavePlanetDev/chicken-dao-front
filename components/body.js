import style from '../styles/Home.module.css'
import styles from '../styles/Body.module.css'





export default function Body() {
  return (<div style={{height:'100vh',width:'100wh'}} className={style.bgimage}>
          <div className={styles.bitbot}>
                    <form>
                              <input type="Number"  min="2.5" placeholder='plance bit' className={styles.placebid}>
                                        
                              </input>
                              <div style={{ display: 'revert', alignItems: 'center',background:'#F02D2D' , height:'60px', width:'150px',filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',right:'-6%', position:'absolute',top:'-3%'}}>
                              <button  type="submit" style={{ display: 'flex', alignItems: 'center',background:'#FFBE3E',height:'60px', width:'150px',right:'6px',position:'absolute',top:'-6px', borderStyle: 'none' }}><p className={styles.textbid}>bid</p></button>
                              </div>
                    </form>
                    <div >
                              <div className={styles.textbit1}>
                              Current bid: 100 Kub
                              <div className={styles.textbit2}>
                              Time Left
                              </div>
                              </div>
                              <div className={styles.textbox}>
                              <ul>
                              <li><span id="hours">12</span>hr</li>
                              <li><span id="minutes">00</span>min</li>
                              <li><span id="seconds">59</span>sec</li>
                              </ul>
                              </div>
                    </div>
          </div>
          <div className={styles.imgchecken}>
                    
          <div style={{ display: 'revert', alignItems: 'center',background:'rgba(255, 222, 5, 0.5)' , height:'710px', width:'604px',filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',right:'15%', position:'absolute'}}>
          <div  type="submit" style={{ display: 'flex', alignItems: 'center',background:'rgba(211, 62, 62, 0.5)',height:'710px', width:'604px',right:'6px',position:'absolute',top:'-6px', borderStyle: 'none' }}>
                    <div><img src='checknf.png' className={styles.imgposition} width='558'/></div>
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

import Connectwallet from './connectwallet';
import styles from '../styles/Header.module.css'

export default function Header() {
          return (
            <div>
                    <div className={styles.logo}>
                              <div >
                                        <img src = 'logochic.png' className={styles.logoimg}></img>
                                        
                              </div>
                              
                              <div>
                              <Connectwallet/>
                              </div>
                    </div>
                    
             
           
               
            </div>
          )
        }
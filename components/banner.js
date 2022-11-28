import styles from '../styles/Body.module.css'


export default function Banner() {
          return (<div>
                    <div className={styles.bannerbox}>
                    <div style={{position:'relative',top:'27%'}}>ชั่วโมงละตัว ไปตลอดจนกว่า KUB จะเจ๊ง !</div>
                    </div>
                    
                    
                    <div style={{display:'flex'}}>
                    <img src="banner.png" width='100%'></img>
                    </div>
                    
                    <div className={styles.bannerbox}>
                    <div style={{position:'relative',top:'27%'}}>Treasury : 999 KUB</div>

                    </div>
          </div>
                    
          )
        }
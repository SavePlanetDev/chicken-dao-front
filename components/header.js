
import Connectwallet from './connectwallet';

export default function Header() {
          return (
            <div>
                    <div style={{ display: 'flex' ,background:'#fff'}}>
                              <div >
                                        <img src = 'logochic.png' width="300px" style={{left:'-45px',top:'-13px',position:'relative'}}></img>
                                        
                              </div>
                              
                              <div>
                              <Connectwallet/>
                              </div>
                    </div>
                    
             
           
               
            </div>
          )
        }
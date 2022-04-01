import './components.css';
import {Link} from 'react-router-dom';

function Card()
{
    return(
        <div className="card">
            
            <div className="imgcon">
                <img src='./Img/qube.png'/>
            </div>
          
          <div className='cubeName'>
            <p className='name'><img className='iconq' src='./Img/iconQ.svg'/>  QUBES 10,000   <img className='heart' src='./Img/iconheart.png'/> 3 </p>
          
          <hr></hr>
          <p className='desname' ><img className='iconsol' src='./Img/solLogo.svg'/> 75  SOL <a className='buy'><Link  to='/NFT' className='links'>BUY NOW</Link></a></p> 
          </div>
         
        </div>
    );
}

export default Card;
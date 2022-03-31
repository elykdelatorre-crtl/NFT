import './components.css';
import {Link} from 'react-router-dom';





function Card(props)
{
    return(
        <div className="card">
            
            <div className="imgcon">
                <img src='./Img/qube.png'/>
            </div>
          
          <div className='cubeName'>
            <p className='name'>{props.text}   <img className='heart' src='./Img/iconheart.png'/> {props.heart} </p>
          
          <hr></hr>
          <p className='desname' ><img className='iconq' src='./Img/iconQ.svg'/> 0  SOL <a className='buy'><Link text={props.text} to='/ConnectWallet'>BUY NOW</Link></a></p> 
          </div>
         
        </div>
    );
}

export default Card;
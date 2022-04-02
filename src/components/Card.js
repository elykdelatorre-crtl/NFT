import './components.css';
import {Link} from 'react-router-dom';

function Card()
{
    return(


      <>        
      
      <div className="card">
            
            <div className="imgcon">
                <img className='imgNFT' src='./Img/sampleNFT.gif'/>
            </div>
          
          <div className='cubeName'>
            <p className='name'>
              Homeqube Logo
              <br/>
              QUBES 10,000
              <img className='iconq ml-3' src='./Img/iconQ.svg'/>
              <img className='heart' src='./Img/iconheart.png'/> 3 </p>
          
          <hr></hr>
          <p className='desname' ><img className='iconsol' src='./Img/solLogo.svg'/> 75  SOL
           <Link  to='/NFT' className='links buy'>BUY NOW</Link>
           </p> 
          </div>
         
        </div>

        <div className="card">
            
            <div className="imgcon">
                <img className='imgNFT' src='./Img/sampleNFT1.gif'/>
            </div>
          
          <div className='cubeName'>
            <p className='name'>
              Homeqube Logo
              <br/>
              QUBES 10,000
              <img className='iconq ml-3' src='./Img/iconQ.svg'/>
              <img className='heart' src='./Img/iconheart.png'/> 3 </p>
          
          <hr></hr>
          <p className='desname' ><img className='iconsol' src='./Img/solLogo.svg'/> 75  SOL
           <Link  to='/NFT' className='links buy'>BUY NOW</Link>
           </p> 
          </div>
         
        </div>

        </>

    );
}

export default Card;
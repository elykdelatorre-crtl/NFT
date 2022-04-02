import './components.css';
import Card from './Card';
import { Link } from 'react-router-dom';

function NFTContainer()
{
    return(
    <>
        <section className='pt-5'>
            <div className='nftcon'>
                        <div className='container text-top col link d-flex align-items justify-content-center mb-2'>
                            <div className='text-container'>
                                <h3 className='top-text'>TRENDING HOMEQUBE NFTs</h3>
                                <h3 className='top-text-2'>Discover more 
                                    <Link to='/AllNFT'>
                                    <button className='button-discover mx-2'>
                                        <img src='./Img/Discover-more-button.svg'/>
                                    </button>
                                    </Link>
                                    
                                </h3>
                               
                            </div>
                        </div>
                                <div className="container-grid container">
                                    <Card text='Homeqube 1' heart='2' />
                                    <Card text='Homeqube 2' heart='3' />
                                    <Card text='Homeqube 3' heart='5' />
                                    <Card text='Homeqube 4' heart='3' />
                                    {/* <Card text='Homeqube 5' heart='21' />
                                    <Card text='Homeqube 6' heart='23' />
                                    <Card text='Homeqube 7' heart='29' />
                                    <Card text='Homeqube 8' heart='22' /> */}
                                </div>
                    </div>
        </section>
    </>
        
        
    );
}

export default NFTContainer;
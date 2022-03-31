import './components.css';
import Card from './Card';

function NFTContainer()
{
    return(
    <div>
        <section>
            <div className='nftcon'>
                        <div className='container text-top col link d-flex align-items justify-content-center'>
                            <div className='text-container'>
                            <h3 className='top-text'>TRENDING HOMEQUBE NFTs</h3>
                            </div>
                        </div>
                                <div className="container-grid container">
                                    <Card text='Homeqube 1' heart='2' />
                                    <Card text='Homeqube 2' heart='3' />
                                    <Card text='Homeqube 3' heart='5' />
                                    <Card text='Homeqube 4' heart='3' />
                                    <Card text='Homeqube 5' heart='21' />
                                    <Card text='Homeqube 6' heart='23' />
                                    <Card text='Homeqube 7' heart='29' />
                                    <Card text='Homeqube 8' heart='22' />
                                </div>
                    </div>
        </section>
    </div>
        
        
    );
}

export default NFTContainer;
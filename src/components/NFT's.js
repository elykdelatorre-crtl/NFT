import './components.css';
import Card from './Card';
import { Link } from 'react-router-dom';

function NFTs()
{
    return(
    <div>
        <section className='pt-5'>
            <div className='nftcon'>
                        <div className='container text-top col link d-flex align-items justify-content-center mb-2'>
                            <div className='text-container'>
                                <h3 className='top-text'>HOMEQUBE NFTs</h3>
                               
                            </div>
                        </div>
                                <div className="container-grid container mb-3">
                                    <Card text='Homeqube 1' heart='2' />
                                    <Card text='Homeqube 2' heart='3' />
                                    <Card text='Homeqube 3' heart='5' />
                                    <Card text='Homeqube 4' heart='3' />
                                    <Card text='Homeqube 5' heart='21' />
                                    <Card text='Homeqube 6' heart='23' />
                                    <Card text='Homeqube 7' heart='29' />
                                    <Card text='Homeqube 8' heart='22' />
                                    <Card text='Homeqube 9' heart='2' />
                                    <Card text='Homeqube 11' heart='3' />
                                    <Card text='Homeqube 12' heart='5' />
                                    <Card text='Homeqube 13' heart='3' />
                                    <Card text='Homeqube 14' heart='21' />
                                    <Card text='Homeqube 15' heart='23' />
                                    <Card text='Homeqube 16' heart='29' />
                                    <Card text='Homeqube 17' heart='22' />
                                </div>
                    </div>
        </section>
    </div>
        
        
    );
}

export default NFTs;
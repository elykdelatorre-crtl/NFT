import './components.css';
import Card from './Card';

function NFTContainer()
{
    return(
        <div className='nftcon'> 
            <div><h3 className='toptxt'>TRENDING HOMEQUBE NFTs</h3></div>
                    <div className="container">


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
    );
}

export default NFTContainer;
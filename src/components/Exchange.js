import './components.css';

function Exchange()
{
    return(
        <div className='container'>
             <section className='exchange mt-5'>

                <div className='container'>
                    <h1 className='exchange-title'>HOME TOKEN CUBE EXCHANGE</h1>
                    <h2 className='exchang-title-2'>MAK SURE YOU HAVE ENOUGH SOL AND THEN CHOOSE THE AMOUNT OF $QUBES</h2>
                </div>

                <div className='container exchange-container my-5'>
                    <div className='first-exchange-container'>
                    <img className='exchange-logo' src='./Img/solanaLogoMark.svg'/>
                    </div>
                    <div className='second-exchange-container'>
                    <img className='exchange-logo' src='./Img/Qube.svg'/>
                    </div>
                </div>
                
            </section>
        </div>
           
    );
}

export default Exchange;
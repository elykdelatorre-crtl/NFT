import './components.css';

function ButtonsInfo()

{

    return(
        
        <>
            <div className='container'>

                <section className='exchange mt-5'>

                    <div className='col link d-flex align-items justify-content container-fluid'>
                            <div className='container-fluid'>
                                <div className='div-position'>
                                <p className='airdrop-text'>AVAILABLE: 5</p>
                                <button className="footbar-button btn btn-lg rounded-pill mx-5" type='button' data-bs-toggle="modal"
                                data-bs-target="#connect-wallet-modal">
                                   60,000  <img className='iconsol mx-2' src='./Img/iconQ.svg'/>
                                </button> 
                                <p className='airdrop-text-2'>1000
                                    <img className='iconsol mx-2' src='./Img/solLogo.svg'/>
                                </p>
                                </div>
                            </div>
                            
                            <div className='container-fluid'>
                                <div className='div-position'>
                                <p className='airdrop-text'>AVAILABLE: 5</p>
                                <button className="footbar-button btn btn-lg rounded-pill mx-5" type='button' data-bs-toggle="modal"
                                data-bs-target="#connect-wallet-modal">
                                     60,000  <img className='iconsol mx-2' src='./Img/iconQ.svg'/>
                                </button> 
                                <p className='airdrop-text-2'>1000
                                    <img className='iconsol mx-2' src='./Img/solLogo.svg'/>
                                </p>
                                </div>
                            </div>
                    </div>
                </section>
             
            </div>
        </>  
    );
}

export default ButtonsInfo;
import './components.css';

function ExchangeContent()

{

    return(
        
        <>
            <div className='container'>

                <section className='exchange mt-5'>

                    <div className='container'>
                        <h1 className='exchange-title'>HOME TOKEN CUBE EXCHANGE</h1>
                        <h2 className='exchang-title-2'>MAK SURE YOU HAVE ENOUGH SOL AND THEN CHOOSE THE AMOUNT OF $QUBES</h2>
                    </div>

                    <div className='container exchange-container my-3'>
                   
                        <div className='first-exchange-container'>
                        <img className='exchange-logo' src='./Img/solanaLogoMark.svg'/>
                        <br/>
                        <h3 className='exchange-text'>From Solana</h3>
                        <input type={'text'} placeholder="Please enter at least 0.01" className='exchange-input'></input>
                        
                        </div>
                            <img src='./Img/Icons/arrow_forward_ios.svg' className='exchange-arrow'/>
                            <div className='second-exchange-container'>
                            <img className='exchange-logo' src='./Img/Qube.svg'/>
                            <br/>
                            <h3 className='exchange-text'>To Qube</h3>
                            <input type={'text'} className='exchange-input'></input>
                        </div>
                    </div>
                    <div className='col link d-flex align-items justify-content-center'>
                        <div className='container'>
                            <button className="footbar-button btn btn-lg rounded-pill" type='button' data-bs-toggle="modal" data-bs-target="#connect-wallet-modal">
                                CONNECT WALLET
                            </button>  
                        </div>
                    </div>
                </section>
                <div class="modal fade" id="connect-wallet-modal" tabindex="-1" aria-labelledby="card-modal-2-label"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal">
                        <div class="modal-content">
                            <div class="card-modal-title modal-header text-center">
                                <div class="col-sm modal-title" id="card-modal-2">
                                    <h2 text-uppercase>Connect Wallet</h2>
                                    <div>
                                    </div>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-uppercase">
                            <div className='col link d-flex align-items justify-content-center p-2'>
                                <div className='container'>
                                    <button className="exchange-button btn btn-lg rounded-pill" type='button'>
                                    <img src='./Img/Icons/phantom.svg' className='wallet-icons'/>
                                        PHANTOM
                                    </button>  
                                </div>
                            </div>
                            <div className='col link d-flex align-items justify-content-center  p-2'>
                                <div className='container'>
                                    <button className="exchange-button btn btn-lg rounded-pill" type='button'>
                                    <img src='./Img/Icons/slope.svg' className='wallet-icons'/>
                                        SLOPE
                                    </button>  
                                </div>
                            </div>
                            <div className='col link d-flex align-items justify-content-center p-2'>
                                <div className='container'>
                                    <button className="exchange-button btn btn-lg rounded-pill" type='button'>
                                    <img src='./Img/Icons/solflare.svg' className='wallet-icons'/>
                                        SOLFARE
                                    </button>  
                                </div>
                            </div>
                            <div className='col link d-flex align-items justify-content-center p-2'>
                                <div className='container'>
                                    <button className="exchange-button-more btn btn-lg rounded-pill" type='button'>
                                        MORE OPTIONS
                                    </button>  
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </>  
    );
}

export default ExchangeContent;
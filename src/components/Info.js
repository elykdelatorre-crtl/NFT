import './components.css';

function Info()
{
    return(
             <section className='info-container mt-5 mb-5'>
                <div className='container'>
                    <div className='info-content'>
                        <div className='col link d-flex align-items justify-content-center'>
                            <div>

                            </div>
                            <div className='content p-5'>
                                <p className='content-questions pt-5'>
                                 What is a non-fungible token (NFT)?
                                </p>
                                <p className='content-text'>
                                Non-Fungible Tokens or NFT has been around as early as 2014 and started to gain popularity in early 2021. 
                                Since then, use cases in Arts, Music, Fashion, Licensing, Gaming, and Metaverse emerged.
                                he advantage of minting these real-life assets and digital pieces can be summarized in simple terms:
                                so that an authentic digital representation of it can be stored in blockchain, making it unique, and
                                impossible to counterfeit, and that the pieces can be bought and sold securely. Although most, if not
                                all the use cases are still in their early stages, individual creators are already benefiting from minting their
                                original works. 
                                It will not take long until the NFT wave reaches industries including the built environment. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
           
    );
}

export default Info;
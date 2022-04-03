import React, { useState, useEffect } from 'react';
function NFTContent()
{
    // State
    const [walletAddress, setWalletAddress] = useState(null);
    // Actions
    const checkIfWalletIsConnected = async () => {
        try {
          const { solana } = window;
      
          if (solana) {
            if (solana.isPhantom) {
              console.log('Phantom wallet found!');
              const response = await solana.connect({ onlyIfTrusted: true });
              console.log(
                'Connected with Public Key:',
                response.publicKey.toString()
              );
      
              /*
               * Set the user's publicKey in state to be used later!
               */
              setWalletAddress(response.publicKey.toString());
            }
          } else {
            alert('Solana object not found! Get a Phantom Wallet 👻');
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      /*
       * Let's define this method so our code doesn't break.
       * We will write the logic for this next!
       */
      const connectWallet = async () => {
        const { solana } = window;
      
        if (solana) {
          const response = await solana.connect();
          console.log('Connected with Public Key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
          
        }
      };
    
      /*
       * We want to render this UI when the user hasn't connected
       * their wallet to our app yet.
       */
      const renderNotConnectedContainer = () => (
        <button
          className="nft-button"
          onClick={connectWallet}
        >
         Connect to wallet
        </button>
      );

      const renderConnectedContainer = () =>(
        <button
          className="nft-button"
        >
          Buy Now
        </button>
      );
    
      useEffect(() => {
        const onLoad = async () => {
          await checkIfWalletIsConnected();
        };
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
      }, []);

    return(
        <>
              <div className="container">
                <div className="row ml-159 mr-159">
            {/*IMG Dito men*/}
                    <div className="col">
                        <div className="imgContainter ">
                            <img className="nftimg img-fluid" src="./Img/sampleNFT.gif"/>
                        </div>
                    </div>
            {/*Ditio yung content*/}
                    <div className="col">
                        <div className="nft-content-con containr-fluid">
                                <h3 className="nftname">Homeqube Logo</h3>
                                <p className="sub-nfttxt"> <img className='nft-icons' src='./Img/iconheart.png'/> 5</p>

                                <p className="sub-nfttxt1">
                                This NFT limited edition logo is our first generation of generated designs. Upon purchase, you will have exclusive ownership of the 3d model, and can be printed on our recommended 3d printers.
                                <br/>
                                <br/>
                                Get this for free by availing a minimum of 10,000 Qubes.
                                </p>
                              
                                <p className="sub-nfttxt2"><img className='nft-icons' src='./Img/solLogo.svg'/> 75 SOL
                                    {!walletAddress && renderNotConnectedContainer()}
                                    {walletAddress && renderConnectedContainer()}  
                                </p> 
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default NFTContent;
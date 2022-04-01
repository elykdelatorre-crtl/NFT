function NFTContent()
{
    return(
        <>
              <div className="container">
                <div className="row ml-159 mr-159">
            {/*IMG Dito men*/}
                    <div className="col">
                        <div className="imgContainter ">
                            <img className="nftimg" src="./Img/qube.png"/>
                        </div>
                    </div>
            {/*Ditio yung content*/}
                    <div className="col">
                        <div className="nft-content-con">
                                <h3 className="nftname">Homeqube Logo</h3>
                                <p className="sub-nfttxt"> <img className='nft-icons' src='./Img/iconheart.png'/> 5</p>

                                <p className="sub-nfttxt1">
                                This NFT limited edition logo is our first generation of generated designs. Upon purchase, you will have exclusive ownership of the 3d model, and can be printed on our recommended 3d printers.
                                <br/>
                                <br/>
                                Get this for free by availing a minimum of 10,000 Qubes.
                                </p>
                              
                                <p className="sub-nfttxt2"><img className='nft-icons' src='./Img/iconQ.svg'/> 0 QUBE <button className="nft-button">BUY NOW</button> </p> 
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default NFTContent;
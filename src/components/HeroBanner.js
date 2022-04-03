import './components.css';
import Card from './Card';
import { Link } from 'react-router-dom';

function NFTs()
{
    return(
    <>
        <section className="showcase showcase-hidden">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="4000">
                <img src="./Img/Herobanner/Card1.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-uppercase">Optimize Home Design According to <br/> Every Budget, Taste and Lifestyle</h5>
                  <br/>
                  <br/>
                  <div className="footbar-btn pb-2">
                    <a href="pipeline.html" className="footbar-button btn btn-lg rounded-pill" role="button">Discover More</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src="./Img/Herobanner/Card2.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-uppercase">Design and Earn: <br/> Discover our DAPP Games</h5>
                  <br/>
                  <br/>
                  <p className="text-uppercase">Use your QUBE tokens to apply for DAO community membership now. Generate your arts and parts. Sell these in NFT marketplaces to earn tokens!</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <img src="./Img/Herobanner/Card3.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-uppercase">Enlist Your Factory</h5>
                  <br/>
                  <br/>
                  <p className="text-uppercase">Be visible and help users design their homes optimally by fielding your products inside the app, may they be architectural, structural, electrical, or interior design parts. </p>
                </div>
              </div>
              <div className="carousel-item item-last" data-bs-interval="4000">
                <img src="./Img/Herobanner/Card4.jpg" class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-uppercase">Meet the Team </h5>
                  <br/>
                  <br/>
                  <p className="text-uppercase">We’re thinkers, doers, and disruptors coming from construction, data science, design, and diverse backgrounds. 
                    <br/>
                    <br/>
                    <br/>
                    <div className="footbar-btn pb-2">
                        <a href="people.html" className="footbar-button btn btn-lg rounded-pill" role="button">Learn More</a>
                      </div>
                    </p>
                </div>
              </div>
            </div>
          </div>
    </section>
    </>
        
        
    );
}

export default NFTs;

import Exchange from "../components/Exchange";
import NFTContainer from "../components/NFTContainer";
import Info from "../components/Info";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import HerroBanner from "../components/HeroBanner"

import './Pages.css';

function Home()
{
    return(
        <>
                <HerroBanner />
                <NFTContainer />
                {/* <Exchange /> */}
                <Info/>
              
                
        </>
    );
}

export default Home;


/*

     <Logo/>
                <NFTContainer />
                {}
                <Info/>
                <Footer/>


*/
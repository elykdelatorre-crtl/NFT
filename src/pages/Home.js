import NFTContainer from "../components/NFTContainer";
import Info from "../components/Info";
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
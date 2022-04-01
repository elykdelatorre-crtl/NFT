
import Exchange from "../components/Exchange";
import NFTContainer from "../components/NFTContainer";
import Info from "../components/Info";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

import './Pages.css';

function Home()
{
    return(
        <>
                <Logo/>
                <NFTContainer />
                {/* <Exchange /> */}
                <Info/>
                <Footer/>
        </>
    );
}

export default Home;
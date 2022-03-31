
import Exchange from "../components/Exchange";
import NFTContainer from "../components/NFTContainer";
import Logo from "../components/Logo";

import './Pages.css';

function Home()
{
    return(
        <div>
                <Logo/>
                <NFTContainer />
                <Exchange />
        </div>
        

    );
}

export default Home;
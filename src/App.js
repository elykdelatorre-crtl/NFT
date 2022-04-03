
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ConnectWallet from "./pages/ConnectWallet";
import AllNFT from "./pages/AllNFT";
import NFT from "./pages/NFT";
import Exchange from "./pages/Exchange";
import Buttons from "./pages/Buttons";


function App() {
  return (
    <>
<Logo/>
<Switch>


    <Route path='/' exact>
        <Home/>
    </Route>
    
    <Route path='/NFT' >
        <NFT/>
    </Route>

    <Route path='/ConnectWallet' >
        <ConnectWallet/>
    </Route>

    <Route path='/AllNFT' >
        <AllNFT/>
    </Route>
    <Route path='/Exchange' >
        <Exchange/>
    </Route>
    <Route path='/Buttons' >
        <Buttons/>
    </Route>


</Switch>

<Footer/>

    </>
  );
}

export default App;

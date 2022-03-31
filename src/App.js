
import Logo from "./components/Logo";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

import ConnectWallet from "./pages/ConnectWallet";
import NFT from "./pages/NFT";


function App() {
  return (
    <div>
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

</Switch>
  
    </div>
  );
}

export default App;

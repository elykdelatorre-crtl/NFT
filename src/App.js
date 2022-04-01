
import Logo from "./components/Logo";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectWallet from "./pages/ConnectWallet";
import NFT from "./pages/NFT";
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div>

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

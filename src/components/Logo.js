import './components.css';
function Logo()
{
    return(
    <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </>      
            // <nav className="navbar navbar-main navbar-light sticky-top">
            //     <div className="container">
            //             <img className="logo" src='./Img/Homeqube-logo-black_small 1.svg' alt=''/>
                    
            //             <ul className="navbar-nav">
            //                 <li className="nav-item ms-5">
            //                         <p className="nav-item-pipehome px-4 tp-4">
            //                             stakeholders
            //                         </p>
            //                 </li>
            //                 <li className="nav-item ms-4">
            //                         <p className="nav-item-QToken px-4 pt-3">
            //                             qube <br />tokenomics
            //                         </p>
            //                 </li>
            //             </ul>
            //     </div>
            // </nav>
    );
}

export default Logo;
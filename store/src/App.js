
import './App.css';
import { useContext, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar';
import Store from './pages/Store';
import CartProvider, { CartContext } from './CartContext';
import Home from './components/Home';
import CartsComponent from './components/CartsComponent';
import MainFooter from './components/MainFooter';
import Billing from './components/Billing';
import Login from './components/Login';
import Registration from './components/Registration';
import {Helmet} from "react-helmet";

function App() {
  const cart = useContext(CartContext)
  const [pageToView, setPageToView] = useState(false)
  const [secondPage, setSecondPage] = useState(false)
  const [thirdPage, setThirdpage] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("gmailLogin", false) ?? null)
  const [login, setLogin] = useState("")

  const styles = {
    backgroundColor: !pageToView ? "#5F9EA0" : "white",
    height:"450px",
    padding:"0px"
  }
  console.log("The value of token:", token)

  var isGmailLogin = localStorage.getItem("gmailLogin");

return (
  <CartProvider>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <NavbarComponent token={token} setToken={setToken} setPageToView={setPageToView} setThirdpage={setThirdpage}
    setSecondPage={setSecondPage} login={login} setLogin={setLogin}/>
    {!pageToView && !secondPage && !thirdPage && <div className='app-main'>
    <Home setPageToView={setPageToView} setSecondPage={setSecondPage} setThirdpage={setThirdpage} />
    <div className='home-main-footer'><MainFooter /></div>
    </div>}
    {!pageToView && secondPage && !thirdPage && <div style={{backgroundColor:"white"}}>
    <Store />
    <br /><br />
    <div className='main-footer-store'><MainFooter /></div>
    </div>}
    {pageToView && !secondPage && !thirdPage && <div style={{backgroundColor:"#5F9EA0", height:"400px"}}>
    {isGmailLogin ? <Billing setPageToView={setPageToView} setSecondPage={setSecondPage} />:
      <Login setToken={setToken} token={token} />
    }
    <div className='home_main_footer'><MainFooter /></div>
    </div>}
    {pageToView && secondPage && !thirdPage && <div style={{backgroundColor:"#5F9EA0", height:"300px"}}>
     <CartsComponent setPageToView={setPageToView} setSecondPage={setSecondPage}/>
    <div className='home-main-footer'><MainFooter /></div>
    </div>}
    {pageToView && secondPage && thirdPage && <div style={{backgroundColor:"#5F9EA0", height:"450px"}}>
     <Registration />
    <div className='home-main-footer'><MainFooter /></div>
    </div>}
</CartProvider>
  );
}

export default App;

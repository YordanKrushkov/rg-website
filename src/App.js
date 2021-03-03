import './App.css';
import {useContext} from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import Title from './Components/Title'
import Background from './Components/Background'
import About from './Pages/About'
import Contact from './Pages/Contacts'
import Login from './Pages/Login'
import Add from './Pages/Add'
import Details from './Pages/Details'
import Gallery from './Components/Gallery'
import Loader from './Components/Loader'
import { AuthContext } from './Context';
import Live from './Pages/Live'
function App() {
  const context=useContext(AuthContext);
  const {isAuthenticated}=context
  const isAuth=isAuthenticated;
  return (
    <Router>
    <div className="App">
      <Header/>
      {/* <Loader /> */}
      <Background/>
      <Switch/>
      <Route exact path="rg-website/" component={Title} />
      <Route  path="rg-website/about" component={About} />
      <Route  path="/portraits" component={Gallery} />
      <Route  path="rg-website/abstracts" component={Gallery} />
      <Route  path="rg-website/landscapes" component={Gallery} />
      <Route  path="rg-website/contacts" component={Contact} />
      <Route  path="rg-website/login" component={Login} />
      <Route  path="rg-website/live" component={Live} />
      {isAuth ? <Route  path="/add" component={Add} />:null}
      <Route  path="rg-website/details:id" component={Details} />
      <Switch/>
    </div>
    </Router>
  );
}

export default App;

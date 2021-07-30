import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Games from './views/Games/Games';
import FlappyBird from './components/FlapppyBird/containers/AppContainer';
import Break from './components/games/Breakout/Break';
import Tictactoe from './components/Tictactoe/components/Tictactoe';
import Leaderboard from './components/Leaderboard/Leaderboard';
import ContactPage from './views/ContactUs/ContactPage';
import Home from './views/Home/Home';
import Snake from './views/Board/Snake';
import Login from './views/login-register/login.component';
import Register from './views/login-register/register.component';
import ProtectedRouter from './views/login-register/protected';
import { useSelector } from 'react-redux';
import RockPaper from './views/RockPaperScissor/RockPaper';
// import NotFound from './views/404/NotFound';

function App() {

  const state = useSelector(state => state);

  console.log(state);

  return (
    <div className='body'>
    <Router>
      <Header />
      <div className='mainBody'>
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games}/>
            <ProtectedRouter exact path="/snake" component={()=><Snake />} />
            <ProtectedRouter exact path="/brick" component={()=><Break />} />
            <ProtectedRouter exact path="/flappy" component={()=><Flappy user={state?.userdata} />} />
            <ProtectedRouter exact path="/rockpaper" component={Rockpaper} />
            <ProtectedRouter exact path='/leaderboard'  component={Leaderboard} />
            <Route path='/contactus' exact component={Contactus} />
            <Route path='/tictactoe' exact component={()=><Tictactoe />} />
            <Route path='*'  component={()=><div className='w-100'> 
            <h2 className='text-center'>404 Page Not Found</h2>
            </div>} />
      <ToastContainer/>
        </Switch>
      </div>
        <Footer />
    </Router>
    </div>
  );
}

// const Leaderboard=()=>{
//   return(<h2 className='text-center'>Leaderboard</h2>)
// }
const Rockpaper=()=>{
  return(
    <RockPaper />
  )
}
const Flappy=({user})=>{
  return(
  <div>
    <FlappyBird user={user} />
  </div>
  )
}

const Contactus=()=>{
  return(
    <div className="contact-us">
      <ContactPage />
      <ToastContainer/>
    </div>)
}


export default App;

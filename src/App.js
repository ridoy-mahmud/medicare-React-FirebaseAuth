
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Detail from './Pages/Detail/Detail/Detail';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/about'>
              <About></About>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute exact path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path='/detail/:serviceId'>
              <Detail></Detail>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

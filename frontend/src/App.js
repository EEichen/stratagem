import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import LoginForm from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupForm from "./components/SignupFormPage/index";
import { restoreUser } from "./store/session";
import Homepage from './components/Homepage'
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return(
    <>
      <Navigation isLoaded={isLoaded} />
      <Homepage />
      {!sessionUser ? <Footer /> : ''}
      {
        isLoaded && (
          <Switch>
            <Route exact path='/'>
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/signup'>
              <SignupForm />
            </Route>
          </Switch>
        )
      }
    </>
  ) 
  
}

export default App;

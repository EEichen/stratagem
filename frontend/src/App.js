import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import LoginForm from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupForm from "./components/SignupFormPage/index";
import { restoreUser } from "./store/session";
import Homepage from './components/Homepage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return(
    <>
      <Navigation isLoaded={isLoaded} />
      {
        isLoaded && (
          <Switch>
            <Route exact path='/'>
              <Homepage />
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

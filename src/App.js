import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { authService } from "./services/auth.service";

function App() {
  const [user, setUser] = useState(null);

  const onLogin = useCallback((userCredential) => {
    const user = authService.onLogin(userCredential);
    if (user) {
      setUser(user);
    } else {
      alert("credentials did not match ! retry ");
    }
  }, []);

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" exact>
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/registration" component={RegistrationForm} exact />
          <Route path="/profile" exact>
            <Profile user={user} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

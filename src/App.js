import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Pages/Homepage";
import Authpage from "./Pages/Authpage";
import UserProfile from "./Components/Profile/UserProfile";
import { useContext } from "react";
import AuthContext from "./Store/auth-context";

function App() {
  const authCxt = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/auth">
          <Authpage />
        </Route>

        <Route path="/profile">
          {authCxt.isLoggedIn && <UserProfile />}
          {!authCxt.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

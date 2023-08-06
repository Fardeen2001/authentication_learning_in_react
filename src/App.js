import { Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Pages/Homepage";
import Authpage from "./Pages/Authpage";
import UserProfile from "./Components/Profile/UserProfile";

function App() {
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
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

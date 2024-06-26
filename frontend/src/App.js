import './App.css';
import Header from "./components/Header";
import {Route, Router, Switch,} from "react-router-dom";
import ConfigPage from "./pages/config";
import {createBrowserHistory} from "history";
import Expressions from "./pages/expressions";
import Agents from "./pages/agents";

function App() {
    var ApiUrl = "http://localhost/api";
    return (
        <Router history={createBrowserHistory()}>
            <Header loginUrl={ApiUrl + "/user/login"} registerUrl={ApiUrl + "/user/new"}
                    adminActionUrl={ApiUrl + "/user/set_is_admin"}/>
            <Switch>
                <Route path="/config" component={() => <ConfigPage ApiUrl={ApiUrl}></ConfigPage>}/>
                <Route path={"/expressions"} component={() => <Expressions NewExpressionUrl={ApiUrl + "/expression/new"}
                                                                           GetListUrl={ApiUrl + "/expression/list"}></Expressions>}/>
                <Route path={"/agent"} component={() => <Agents GetAgentsUrl={ApiUrl + "/agent/list"}></Agents>}/>
            </Switch>
        </Router>
    );
}

export default App;

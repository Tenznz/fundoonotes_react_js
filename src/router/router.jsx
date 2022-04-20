import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "../component/pages/signin/signin";
import SignUp from "../component/pages/signup/signup";
import Dashboard from "../component/pages/dashboard/dashboard";

function Router() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route path="/SignIn" component={SignIn} />
                    <Route exact path="/" component={SignUp} />
                    <Route path="/Dashboard" component={Dashboard} />

                    {/* <Route path="/Dashboard">
                       <Protected component={Dashboard}/>
                   </Route> */}

                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router;
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";
import './style/index.css';
import reducers from "./reducers";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CourtPanel from "./containers/court/CourtPanel";
import PlayerPanel from "./containers/player/PlayerPanel";
import MemberPanel from "./containers/member/MemberPanel";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <Switch>
                <Route path="/courts" component={CourtPanel}/>
                <Route path="/players" component={PlayerPanel}/>
                <Route path="/members" component={MemberPanel}/>

                <Route exact path="/" component={CourtPanel}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

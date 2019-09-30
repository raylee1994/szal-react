import React from 'react';
import routes from "router";
import {BrowserRouter, Switch} from "react-router-dom"; 
import RouterGuard from 'router/routerGuard';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Switch>
          {
            routes.map((item, index) => {
              return (
                <RouterGuard {...item} key={index}></RouterGuard>
              )
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

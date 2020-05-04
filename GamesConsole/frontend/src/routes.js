import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import resultado from './Pages/resultado/index';
import home from './Pages/Home/index'


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/resultado" component={resultado}/>
      </Switch>
    </BrowserRouter>
  )
}
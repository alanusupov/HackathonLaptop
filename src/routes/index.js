import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'
import Address from '../pages/Address'
import Layout from '../components/Layout'



function Routes () {
  return (
    
     <BrowserRouter>
        <Switch>
           <Layout>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/address" component={Address}/>
            <Route exact path="/about" component={AboutUs}/>
           </Layout>
        </Switch>
     </BrowserRouter>
    
  )
}

export default Routes
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'
import Layout from '../components/Layout'
import Order from '../pages/Order'
import Payment from '../pages/Payment'



function Routes () {
  return (
    
     <BrowserRouter>
        <Switch>
           <Layout>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/order" component={Order}/>
           </Layout>
        </Switch>
     </BrowserRouter>
    
  )
}

export default Routes
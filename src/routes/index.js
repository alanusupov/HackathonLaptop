import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Layout from '../components/Layout'
import Order from '../pages/Order'
import Payment from '../pages/Payment'

import Lenovo from '../pages/DropdownProducts/Lenovo'
import Asus from '../pages/DropdownProducts/Asus'
import Microsoft from '../pages/DropdownProducts/Microsoft'
import HP from '../pages/DropdownProducts/HP'


function Routes () {
  return (
    
     <BrowserRouter>
        <Switch>
           <Layout>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/order" component={Order}/>

            <Route exact path="/lenovo" component={Lenovo}/>
            <Route exact path="/asus" component={Asus}/>
            <Route exact path="/hp" component={HP}/>
            <Route exact path="/microsoft" component={Microsoft}/>
            {/* <Route exact path="/about" component={AboutUs}/> */}
           </Layout>
        </Switch>
     </BrowserRouter>
    
  )
}

export default Routes
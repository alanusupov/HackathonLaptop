import React from 'react'
import Header from './Header'
// import Sidebar from './Sidebar'




function Layout(props) {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <div className="page-wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default Layout

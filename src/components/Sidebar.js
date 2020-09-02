import React from 'react'
import {Nav, NavLink} from 'react-bootstrap'

function Sidebar() {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <NavLink href="/home">Active</NavLink>
        <NavLink eventKey="link-1">Link</NavLink>
        <NavLink eventKey="link-2">Link</NavLink>
        <NavLink eventKey="link-3">Link</NavLink>
        <NavLink eventKey="link-4">Link</NavLink>
        <NavLink eventKey="link-5">Link</NavLink>
        <NavLink eventKey="link-6">Link</NavLink>
        <NavLink eventKey="link-7">Link</NavLink>
        <NavLink eventKey="link-8">Link</NavLink>
        <NavLink eventKey="disabled" disabled>
          Disabled
        </NavLink>
      </Nav>
    </div>
  )
}

export default Sidebar

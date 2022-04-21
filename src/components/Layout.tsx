import React, { Component, Fragment } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

interface Props {}

interface State {}

export default class Layout extends Component<Props, State> {


  render() {
    return (
      <main>
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary '>
          <Link to="#" className="navbar-brand">ProyectoFinal</Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse'
                  data-target='navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id='navbarNav'>
            <div className="navbar-nav">
              <NavLink  className={ ({isActive})=> isActive ? 'nav-item nav-link active' : 'nav-item nav-link'  }
                        to='/' >home</NavLink>
              <NavLink to='/users' className="nav-item nav-link ">Users</NavLink>
              <NavLink to='/about' className="nav-item nav-link ">about</NavLink>
            </div>
          </div>
        </nav>
        <section>
          <Outlet />
        </section>
      </main>
    )
  }
}
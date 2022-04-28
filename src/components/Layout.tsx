import React, { Component, Fragment } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Navbar from './Main/Navbar'

interface Props {}

interface State {}

export default class Layout extends Component<Props, State> {


  render() {
    return (
      <main>
        <Navbar />
        <section className='mt-3'>
          <Outlet />
        </section>
      </main>
    )
  }
}
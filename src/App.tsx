import React, { Component } from 'react'
import { HistoryRouterProps, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Games from './pages/Games/Games'
import Home from './pages/Home'
import User from './pages/users/User'
import Users from './pages/Games/Users'

interface Props {}

interface State {}

export default class App extends Component<Props, State> {

  render() {
    return (
      <div>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='games' element={<Games />}>
              <Route path=':id' element={<div>hello</div> } />
            </Route>
            <Route path='users' element={<Users />}>
              <Route index element={<div>Seleccione un usuario</div>}/>
              <Route path=':id' element={<User />}/>
            </Route>
            <Route path='about' element={<About />}/>
            <Route path='*' element={<Navigate replace to='/' />}/>
          </Route>
        </Routes>


      </div>
    )
  }
}

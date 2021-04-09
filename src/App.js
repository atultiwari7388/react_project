import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import About from './About'
import Users from './Users'

const App = () => {
     return (
          <>
               <Router>

                    <Navbar bg="dark" variant="dark">
                         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                         <Nav className="mr-auto">
                              <Nav.Link href="#home">
                                   <Link to='/'>Home</Link>
                              </Nav.Link>
                              <Nav.Link href="#features">
                                   <Link to='/about'>About</Link>
                              </Nav.Link>
                              <Nav.Link href="#pricing">
                                   <Link to='/users'>Users</Link>
                              </Nav.Link>
                         </Nav>
                    </Navbar>

                    <Switch>
                         <Route path='/about'>
                              <About />
                         </Route>

                         <Route path='/users'>
                              <Users />
                         </Route>

                         <Route path='/'>
                         </Route>
                    </Switch>
               </Router>
          </>
     )
}

export default App
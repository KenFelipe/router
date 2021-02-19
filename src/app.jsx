import React from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// share
import Header from './share/header'
import NavBar from './share/nav'

// page
import Home from './contents/Home'
import About from './contents/About'
import Contact from './contents/Contact'


const App = props => {
    return (
        <Wrapper>
            {/* share */}
            <Header></Header>

            <Router hashType="noslash">
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />

                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </Wrapper>
    )
}

{/* <Home></Home> */}
{/* <About></About> */}
{/* <Contact></Contact> */}

const Wrapper = styled.div``

export default App
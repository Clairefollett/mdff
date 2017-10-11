import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import News from './News';
import Donate from './Donate';
import Social from './SocialMedia';
import Contact from './ContactUs'

export default class Main extends React.Component {
  render() {
    return (
        <main>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/News' component={News}/>
            <Route path='/Donate' component={Donate}/>
            <Route path='/SocialMedia' component={Social}/>
            <Route path='/ContactUs' component={Contact}/>
        </main>
    )}
}

import React from 'react';
// import  Switch, Route } from 'react-router-dom';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <nav className='navigation'>
                <ul className='linked-lists'>
                    <li className='button'><Link to='/' className='link'>Home</Link></li>
                    <li className='button'><Link to='/About' className='link'>About</Link></li>
                    <li className='button'><Link to='/News' className='link'>News</Link></li>
                    {/*<li className='button'><Link to='/Donate' className='link'>Donate</Link></li>*/}
                    <li className='button'><Link to='/ContactUs' className='link'>Contact Us</Link></li>
                    <li className='button'><Link to='/SocialMedia' className='link'>Social Media</Link></li>
                </ul>
            </nav>
        </header>
    )}
}






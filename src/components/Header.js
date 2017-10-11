import React from 'react';
// import  Switch, Route } from 'react-router-dom';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <nav className='navigation'>
                <ul className='linked-lists'>
                    <li className='button'><Link to='/' className='link'><img src={require('../assets/home.jpg')} alt='home-icon' className='icon'/></Link></li>
                    <li className='button'><Link to='/About' className='link'><img src={require('../assets/about.jpg')} alt='about-icon' className='icon'/></Link></li>
                    <li className='button'><Link to='/News' className='link'><img src={require('../assets/news.jpg')} alt='news-icon' className='icon'/></Link></li>
                    {/*<li className='button'><Link to='/Donate' className='link'>Donate</Link></li>*/}
                    <li className='button'><Link to='/ContactUs' className='link'><img src={require('../assets/contactUs.jpg')} alt='contact-icon' className='icon'/></Link></li>
                    <li className='button'><Link to='/SocialMedia' className='link'><img src={require('../assets/socialMedia.jpg')} alt='social-icon' className='icon'/></Link></li>
                </ul>
            </nav>
        </header>
    )}
}






import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
        <div className='header-div'>
            <h1 className='home-header'>Many Dances Family Foundation</h1>
            <img src={require('../assets/family.jpg')} alt='home' className='home-background'/>
        </div>
    )}
}


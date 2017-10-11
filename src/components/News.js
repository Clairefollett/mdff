import React from 'react';

export default class News extends React.Component {
  render() {
    return (
        <div className='header-div'>
            <h1 className='home-header'>Recent news stories</h1>
            <ul>
                <li>News story</li>
                <li>Another one</li>
                <li>Another news story</li>
            </ul>
        </div>
    )}
}

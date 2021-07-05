import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

import {Route} from 'react-router-dom'; // Switch


const App = () => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">

            <AppHeader total={50}/>


            < Route exact path='/' component={MainPage}/>
            < Route path='/cart' component={CartPage}/>
            
        </div>
    )
}

export default App;
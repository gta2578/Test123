import React from 'react';
import Sale from './Router/Sale';
import Rent from './Router/Rent';
import Settlement from './Router/Settlement';
import About from './Router/About';
import { Switch, Route, NavLink } from 'react-router-dom';
import './style.sass'


function Header() {

    return(
    <header>
        <div className="menuButton">
            <ul className='navMenu'>
                <li><NavLink exact to = '/sale'>Продажа</NavLink></li>
                <li><NavLink exact to = '/rent'>Аренда</NavLink></li>
                <li><NavLink exact to = '/settlement'>Посёлки</NavLink></li>
                <li><NavLink exact to = '/about'>О компании</NavLink></li>
            </ul>
            <button className="callBack">Обратный звонок</button>
        </div>
        <Switch>
        <Route exact path='/sale' component={Sale}/>
        <Route exact path='/rent' component={Rent}/>
        <Route exact path='/settlement' component={Settlement}/>
        <Route exact path='/about' component={About}/>
        </Switch>
    </header>)
}

export default Header;
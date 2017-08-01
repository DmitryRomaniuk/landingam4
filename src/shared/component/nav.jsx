// @flow

import React from 'react';
import injectSheet from 'react-jss';
import {Link, NavLink} from 'react-router-dom';
import * as routes from '../routes';
import { STATIC_PATH } from '../config';

const styles = {

};

const handleNavLinkClick = () => {
    /* eslint-disable no-undef */
    // flow-disable-next-line
    $('body').scrollTop(0);
    $('.js-navbar-collapse').collapse('hide');
    /* eslint-enable no-undef */
};

const Nav = ({classes}: { classes: Object }) =>
    <nav className="navbar navbar-toggleable-md navbar-light header">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <Link to={routes.HOME_PAGE_ROUTE} className='navbar-brand'>
            <img src={STATIC_PATH+'/img/logo.png'} alt=""/>
        </Link>
        <div className="js-navbar-collapse collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav mr-auto'>
                {[
                    {route: routes.NEWS_PAGE_ROUTE, label: 'Новости'},
                    {route: routes.ARTICLES_PAGE_ROUTE, label: 'Статьи'},
                    {route: routes.VIDEOS_PAGE_ROUTE, label: 'Видео'},
                    {route: routes.GAMES_PAGE_ROUTE, label: 'Игры'},
                    {route: routes.TRAILERS_PAGE_ROUTE, label: 'Еще'},
                ].map(link => (
                    <li className='nav-item' key={link.route}>
                        <NavLink to={link.route} className="nav-link" activeStyle={{color: 'black'}} exact
                                 onClick={handleNavLinkClick}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            <button type="button" className="btn btn-secondary nav_btn login">Вход</button>
            <button type="button" className="btn btn-info nav_btn registration">Регистрация</button>
        </div>
    </nav>;

export default injectSheet(styles)(Nav);

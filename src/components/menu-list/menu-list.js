import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions'
import Spinner from '../spinner'
import Error from '../error/'

class MenuList extends Component {

    componentDidMount(){
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then( res => this.props.menuLoaded(res) )
    }

    componentDidCatch(err) {
        this.props.menuError();
        console.log(err);
    }

    render() {

        if(this.props.loading) { return < Spinner/> } // ... LOADING ...
        if( this.props.error) { return < Error/> }    // ... ERROR   ...

        const {menuItems} = this.props;

        return (
            <ul className="menu__list">
                {
                    menuItems.map( menuItem => {
                        return <MenuListItem key={menuItem.id} item={menuItem}/>
                    })
                }
                
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
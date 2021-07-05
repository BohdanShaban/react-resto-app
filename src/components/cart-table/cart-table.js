import React from 'react';
import './cart-table.scss';

import {connect} from 'react-redux';
import {onItemFromCartDeleate} from '../../actions'

const CartTable = ({selectedItems, onItemFromCartDeleate}) => {
    return (
        <>
            <div className="cart__title">Your Order:</div>
            <div className="cart__list">

                {
                    selectedItems.map( item => {
                        const {url, title, price, id} = item;

                        return(
                            <div key={id} className="cart__item"> { /* !!! key = id !!! */ } 
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={ () => onItemFromCartDeleate(id) } className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    );
};

const mapStateToProps = ({selectedItems}) => {
    return {
        selectedItems
    }
}
const mapDispatchToProps = {
    onItemFromCartDeleate
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
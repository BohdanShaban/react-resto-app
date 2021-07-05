import React from 'react';
import './cart-table.scss';

import {connect} from 'react-redux';

const CartTable = ({selectedItems, onItemFromCartDeleate}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">

                {
                    selectedItems.map( item => {
                        const {src, title, price, id} = item;

                        return(
                            <div key={id} className="cart__item">
                                <img src={src} className="cart__item-img" alt={title}></img>
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
const mapDispatchToProps = () => {
    return {
        onItemFromCartDeleate: (id) => {
            console.log(`ID of Deleted Item:${id}`)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
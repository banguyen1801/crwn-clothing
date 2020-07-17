import React from 'react';

import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetailsContainer className="item-details">
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;

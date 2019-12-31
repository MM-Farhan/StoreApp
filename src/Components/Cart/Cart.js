import React, { Component } from 'react';
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';


class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    { values=> {
                        const {cart} = values;
                        if (cart.length>0) {
                            return (
                            <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColumn />
                                <CartList value={values} />
                            </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
                <EmptyCart />
            </section>
        )
    }
}

export default Cart

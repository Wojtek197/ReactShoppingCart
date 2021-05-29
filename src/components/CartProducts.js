import react, { Component } from 'react';
import Product from './Product';

export default function CartProducts(props) {
    const {products, onAdd, onRemove} = props;
    return (
        <main>
            <div className="productCart">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2-title"></div>
                    <div className="col-3 title"><strong>Product Name</strong></div>
                    <div className="col-4 title"><strong>Unit Price</strong></div>
                    <div className="col-5 title"><strong>Quantity</strong></div>
                </div>
                <hr></hr>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}></Product>
                ))}
                <hr className="hr"></hr>
            </div>
        </main>
    );
}
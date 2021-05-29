import React from 'react'
import exit from '../images/x-img.png'

export default function Product(props) {
    const { product, onAdd, onRemove } = props
    return (
        <div className="row product">
            <div className="col-1"><button className="btn-remove"><img src={exit}></img></button></div>
            <div className="col-2-title"><img className="productPhoto" src={product.image} alt={product.name}></img></div>
            <div className="col-3">{product.name}</div>
            <div className="col-4">${product.cost.toFixed(2)}</div>
            <div className="col-5">
                <button onClick={() => onRemove(product)}>-</button>
                <button onClick={() => onAdd(product)}>+</button>
            </div>
        </div>
    )
}

import React, { useState, useCallback } from 'react'

const CartItem = ({ item, cartActions }) => {
    const { updateQty } = cartActions;

    const [qty, setQty] = useState(item ? item.qty : {});
    const handleQtyChange = (event) => {

        var updatedQty = event.target.value ? parseInt(event.target.value, 10) : 0;
        if (updatedQty > 0) {
            setQty(updatedQty);
            updateQty({ qty: updatedQty, productId: item.id });
        } else {
            setQty(0);
        }
    }
    const increaseQty = () => {
        if (qty < 100) {
            setQty(qty + 1)
            updateQty({ qty: qty + 1, productId: item.id });
        }

    }
    const decreaseQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
            updateQty({ qty: qty - 1, productId: item.id });
        }

    }
    const debounce = (func, delay) => {
        let timeoutId;
        return function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...arguments);
            }, delay);
        }
    }
    const OptimizedVersion = useCallback(() => {debounce(handleQtyChange, 3000) }, []);
    return (
        <>
            {item &&
                <tr>
                    <td className="cart-pic first-row px-5 py-3"><img src={item.images[0].src} alt="" /></td>
                    <td className="cart-title first-row">
                        <h5>{item.name}</h5>
                    </td>
                    <td className="p-price first-row">₹{item.price || item.prices.sale_price}</td>
                    <td className="qua-col first-row">
                        <div className="quantity">

                            <div className="pro-qty">
                                <span className="dec qtybtn" onClick={decreaseQty}>-</span>
                                <input type="text" value={qty} onChange={OptimizedVersion} min="1" />
                                <span className="inc qtybtn" onClick={increaseQty}>+</span>
                            </div>

                        </div>
                    </td>
                    <td className="total-price first-row">₹{item.prices?.sale_price || item.price * item.qty}</td>
                    <td className="close-td first-row"><i onClick={() => updateQty({ qty: 0, productId: item.id })} className="ti-close" /></td>
                </tr>}
        </>
    )
}

export default CartItem

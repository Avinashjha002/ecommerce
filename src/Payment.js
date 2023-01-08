import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
// import { useNavigate } from 'react-router-dom';
// import axios from "./axios";

function Payment() {

    const[{basket, user}, dispatch] = useStateValue();

    // const navigate = useNavigate();

    // const stripe = useStripe();
    // const elements= useElements();

    // const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    // const [clientSecret, setClientSecret] = useState(true);

    // useEffect(() => {
    //     //generate special stripe secret which allows us to charge customer
        
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             //stripe expects the total in currencies in subunits
    //             url: `/payments/create?total=${getBasketTotal(basket)*100}`
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }
    //     getClientSecret();
    // }, [basket])

    // console.log('The secret is >>>> ', clientSecret)

    // const handleSubmit = async(event) => {
    //     event.preventDefault();
    //     setProcessing(true)

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method:{
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent}) => {
    //         //paymentIntent==payment Confirmation
    //         setSucceeded(true)
    //         setError(null)
    //         setProcessing(false)

    //         dispatch({
    //             type: 'EMPTY_BASKET',              
    //         })

    //         navigate("/orders", {replace: true})
    //     })
    // }

    const handleChange = event => {     
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    <Link to="/checkout">Checkout</Link>
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>abc Apartment, GoreGaon</p>
                        <p>VikasPuri, Mumbai</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                className="checkout_product"
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section2">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form>
                            <CardElement className='cardElement' onChange={handleChange}/>
                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
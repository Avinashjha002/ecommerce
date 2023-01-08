import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Loginpage';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51LKyNoSJKjDanhkxOgJxpjVeGuR3L1uggYPUjPQfFEcGN9aeb0i4TRtif8KMgeFvCDJc1Oj1gcPO9J5KwvxNu7tF00hzVPqg8e");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads. Its like an if statement
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is >>>>", authUser);

      if (authUser) {
        //the user the just logged in/ was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/orders' element={<Orders/>} />
          <Route path="/payment" element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
          <Route path="/login" element={<Loginpage/>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path="/" element={<><Header/><Home/></>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

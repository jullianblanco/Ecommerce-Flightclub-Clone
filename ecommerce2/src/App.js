import React from 'react';
import { ReactDOM, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductScreen from './Components/Screens/ProductScreen';
import HomeScreen from './Components/Screens/HomeScreen';
import LoginScreen from './Components/Screens/LoginScreen'
import RegisterScreen from './Components/Screens/RegisterScreen'
import AccountScreen from './Components/Screens/AccountScreen';
import EditAccount from './Components/Screens/EditAccountScreen';
import CartScreen from './Components/Screens/CartScreen';
import BuyScreen from './Components/Screens/BuyScreen';
import MensScreen from './Components/Screens/MensScreen';
import WomensScreen from './Components/Screens/WomensScreen';
import KidsScreen from './Components/Screens/KidsScreen';
import SneakersScreen from './Components/Screens/SneakersScreen';
import AboutScreen from './Components/Screens/AboutScreen';

function App() {
  return (
<div className="App">
    <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/sneakers/products/:id' element={<ProductScreen/>}></Route>
      <Route path='/login' element={<LoginScreen/>}></Route>
      <Route path='/register' element={<RegisterScreen/>}></Route>
      <Route path='/account' element={<AccountScreen/>}></Route>
      <Route path='/account/updateinformation' element={<EditAccount/>}></Route>
      <Route path='/cart' element={<CartScreen/>}></Route>
      <Route path='/buyscreen' element={<BuyScreen/>}></Route>
      <Route path='/mens' element={<MensScreen/>}></Route>
      <Route path='/womens' element={<WomensScreen/>}></Route>
      <Route path='/kids' element={<KidsScreen/>}></Route>
      <Route path='/sneakers' element={<SneakersScreen/>}></Route>
      <Route path='/about' element={<AboutScreen/>}></Route>
    </Routes>
</div>
 );}

export default App;
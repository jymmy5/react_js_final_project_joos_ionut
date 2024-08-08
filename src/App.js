import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import MainLayout from './layouts/main/MainLayout'
import Categories from './views/categories/Categories'
import Product from './views/product/Product'
import Products from './views/products/Products'
import Start from './views/start/Start'
import Dashboard from './components/dashboard/Dashboard'
import Cart from './views/cart/Cart'
import NotFound from './views/404/NotFound'
import RestMenuLayout from './layouts/restMenu/RestMenuLayout'
import Login from './views/login/Login'
import Register from './views/register/Register'
import ForgotPassword from './views/forgotPassword/ForgotPassword'
import SuccesAlert from './components/alert/SuccesAlert'
import CustomerLayout from './layouts/customerLayout/CustomerLayout'
import ResetPassword from './views/resetPassword/ResetPassword'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [userData, setuserData] = useState([])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) {
      setuserData(userData)
      setIsLoggedIn(true)
    }
  }, [])

  const toggleLogin = () => {
    if (isLoggedIn) {
      localStorage.removeItem('userData')
      setIsLoggedIn(false)
    }
  }

  return (
    <>
      <GlobalStyle />
      {showAlert && <SuccesAlert message={alertMessage} />}
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <MainLayout isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
              }
            >
              <Route index element={<Start />} />
              <Route
                path={'/cart'}
                element={<Cart isLoggedIn={isLoggedIn} />}
              />
              <Route
                path={'/login'}
                element={
                  <Login
                    onLogin={(acces) => {
                      setIsLoggedIn(acces)
                    }}
                  />
                }
              />
              <Route path={'/register'} element={<Register />} />
              <Route path={'/forgot-password'} element={<ForgotPassword />} />
              <Route
                path='/reseteaza-parola/:token'
                element={<ResetPassword />}
              />
            </Route>
            {/* ----------- RestMenuLayout ----------- */}
            <Route
              path={'/'}
              element={
                <RestMenuLayout
                  isLoggedIn={isLoggedIn}
                  toggleLogin={toggleLogin}
                />
              }
            >
              <Route path={'/categories/:id'} element={<Categories />} />
              <Route path={'/meniu'} element={<Products />} />
              <Route path={'/products'} element={<Products />} />
              <Route path={'/product/:id'} element={<Product />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            {/* ----------- MainLayout ----------- */}
            <Route
              path={'/'}
              element={
                <MainLayout isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
              }
            >
              <Route
                path={'/cart'}
                element={<Cart isLoggedIn={isLoggedIn} />}
              />
            </Route>
            {/* ----------- CustomerLayout ----------- */}
            <Route>
              <Route
                path='/'
                element={
                  <CustomerLayout
                    isLoggedIn={isLoggedIn}
                    toggleLogin={toggleLogin}
                  />
                }
              >
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
            {/* ----------- RestMenuLayout ----------- */}
            <Route
              element={
                <RestMenuLayout
                  isLoggedIn={isLoggedIn}
                  toggleLogin={toggleLogin}
                />
              }
            >
              <Route
                path={'/categories/:id'}
                element={
                  // <Categories onBuy={addToCart} onAlert={handleShowAlert} />
                  <Categories />
                }
              />
              <Route
                path={'/meniu'}
                element={
                  // <Products onBuy={addToCart} onAlert={handleShowAlert} />
                  <Products />
                }
              />
              <Route
                path={'/products'}
                element={
                  // <Products onBuy={addToCart} onAlert={handleShowAlert} />
                  <Products />
                }
              />
              <Route
                path={'/product/:id'}
                element={
                  // <Product onBuy={addToCart} onAlert={handleShowAlert} />
                  <Product />
                }
              />
            </Route>

            {/* ------ page not found ---------- */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App

// ----------------- cu adaugare produse in local storage
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GlobalStyle from './styles/GlobalStyle';
// import MainLayout from './layouts/main/MainLayout';
// import Categories from './views/categories/Categories';
// import Product from './views/product/Product';
// import Products from './views/products/Products';
// import Start from './views/start/Start';
// import Dashboard from './views/dashboard/Dashboard';
// import Cart from './views/cart/Cart';
// import NotFound from './views/404/NotFound';
// import RestMenuLayout from './layouts/restMenu/RestMenuLayout';
// import Login from './views/login/Login';
// import SuccesAlert from './components/alert/SuccesAlert';

// function App() {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   function addToCart(quantity, productId, productName) {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === productId);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { id: productId, quantity: quantity }];
//     });
//     handleShowAlert(
//       `Produsul "${productName}" a fost adaugat in cos. Cantitate: ${quantity}`
//     );
//   }

//   const handleShowAlert = (message) => {
//     setAlertMessage(message);
//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <>
//       <GlobalStyle />
//       {showAlert && <SuccesAlert message={alertMessage} />}
//       {!isLoggedIn ? (
//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<MainLayout />}>
//               <Route index element={<Start />} />
//               <Route
//                 path={'/cart'}
//                 element={<Cart cart={cart} onChange={addToCart} />}
//               />
//               <Route path={'/login'} element={<Login />} />
//             </Route>
//             <Route path={'/'} element={<RestMenuLayout />}>
//               <Route
//                 path={'/categories/:id'}
//                 element={
//                   <Categories onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/meniu'}
//                 element={
//                   <Products onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/products'}
//                 element={
//                   <Products onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/product/:id'}
//                 element={
//                   <Product onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/cart'}
//                 element={<Cart cart={cart} onChange={addToCart} />}
//               />
//             </Route>
//             <Route path='*' element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       ) : (
//         <BrowserRouter>
//           <Routes>
//             <Route path={'/'} element={<MainLayout />}>
//               <Route index element={<Dashboard />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       )}
//     </>
//   );
// }

// export default App;

// -------------------- initial -----------------
// import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GlobalStyle from './styles/GlobalStyle';
// import MainLayout from './layouts/main/MainLayout';
// import Categories from './views/categories/Categories';
// import Product from './views/product/Product';
// import Products from './views/products/Products';
// import { useState } from 'react';
// import Start from './views/start/Start';
// import Dashboard from './views/dashboard/Dashboard';
// import Cart from './views/cart/Cart';
// import NotFound from './views/404/NotFound';
// import RestMenuLayout from './layouts/restMenu/RestMenuLayout';
// import Login from './views/login/Login';
// import SuccesAlert from './components/alert/SuccesAlert';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   function addToCart(quantity, productId, productName) {
//     setCart([...cart, { id: productId, quantity: quantity }]);
//     handleShowAlert(
//       `Produsul "${productName}" a fost adaugat in cos. Cantitate: ${quantity}`
//     );
//     localStorage.setItem('myCart', 'prdus din storage');
//   }

//   const handleShowAlert = (message) => {
//     setAlertMessage(message);
//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <>
//       <GlobalStyle />
//       {showAlert && <SuccesAlert message={alertMessage} />}
//       {!isLoggedIn ? (
//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<MainLayout />}>
//               <Route index element={<Start />} />
//               <Route
//                 path={'/cart'}
//                 element={<Cart cart={cart} onChange={addToCart} />}
//               />
//               <Route path={'/login'} element={<Login />} />
//             </Route>
//             <Route path={'/'} element={<RestMenuLayout />}>
//               <Route
//                 path={'/categories/:id'}
//                 element={
//                   <Categories onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/meniu'}
//                 element={
//                   <Products onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/products'}
//                 element={
//                   <Products onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/product/:id'}
//                 element={
//                   <Product onBuy={addToCart} onAlert={handleShowAlert} />
//                 }
//               />
//               <Route
//                 path={'/cart'}
//                 element={<Cart cart={cart} onChange={addToCart} />}
//               />
//             </Route>
//             <Route path='*' element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       ) : (
//         <BrowserRouter>
//           <Routes>
//             <Route path={'/'} element={<MainLayout />}>
//               <Route index element={<Dashboard />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       )}
//     </>
//   );
// }

// export default App;

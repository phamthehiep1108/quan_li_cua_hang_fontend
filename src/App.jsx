import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookPage from './pages/book';
import ContactPage from './pages/contact';
import LoginPage from './pages/login';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterPage from './pages/register';
import { useDispatch, useSelector } from 'react-redux';
import { doGetAccountAction } from './redux/account/accountSlice';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import AdminPage from './pages/admin';
import ProtectedRoute from './components/ProtectedRoute';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import './styles/reset.scss';
import LoginForAdmin from './pages/admin/loginForAdmin';
import TableCustomer from './components/Admin/Customer/TableCustomer';
import TableCategory from './components/Admin/Category/TableCategory';
import TableManage from './components/Admin/Room/TableRoom';
import TableRoom from './components/Admin/Room/TableRoom';


const Layout = () => {
  return (
    <div className='layout-app'>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.account.isLoading)
  const isAuthenticated = useSelector(state => state.account.isAuthenticated)

  // const getAccount = async () => {
  //   if (
  //     window.location.pathname === '/login'
  //     || window.location.pathname === '/register'
  //   )
  //     return;

  //   const res = await callFetchAccount();
  //   if (res && res.data) {
  //     dispatch(doGetAccountAction(res.data))
  //   }
  // }

  // useEffect(() => {
  //   getAccount();
  // }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "book",
          element: <BookPage />,
        },
        {
          path: "room",
          element: <BookPage />,
        },
        {
          path: "tour",
          element: <BookPage />,
        },
      ],
    },

    {
      path: "/admin",
      element: <LayoutAdmin />,
      errorElement: <NotFound />,
      children: [
        {
          index: true, element:
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
        },
        
        {
          path: "staff",
          element: <ContactPage />,
        },

        {
          path: "customer",
          element: <TableCustomer />,
        },
    
        {
          path: "category",
          element: <TableCategory/>,
        },
        {
          path: "room",
          element: <TableRoom />,
        },
        {
          path: "tour",
          element: <BookPage />,
        },
        {
          path: "order",
          element: <BookPage />,
        },
      ],
    },


    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/loginAdmin",
      element: <LoginForAdmin/>,
    },

    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);

  return (
    <>
      {
           isLoading === false
          || window.location.pathname === '/login'
          || window.location.pathname === '/loginAdmin'
          || window.location.pathname === '/register'
          || window.location.pathname === '/'
          ?
          <RouterProvider router={router} />
          :
          <Loading />
      }
    </>
  )
}

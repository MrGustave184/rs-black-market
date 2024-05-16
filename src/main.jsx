import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './styles.scss'
import * as bootstrap from 'bootstrap'

/**
 * Routes
 */
import Root from './routes/root'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import ErrorPage from './components/errorPage/ErrorPage'

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signin",
        element: <Signin />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </QueryClientProvider>
)

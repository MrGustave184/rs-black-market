import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './components/signup/Signup'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
import './styles.css'

const queryClient = new QueryClient();

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//     },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <Signup />
            {/* <RouterProvider router={router} /> */}
        </React.StrictMode>
    </QueryClientProvider>
)

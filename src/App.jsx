import { useState, useEffect } from 'react'
// import { QueryClient, useQuery } from '@tanstack/react-query'
import './App.css'

// const queryClient = new QueryClient()


function App() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        password: '',
        passwordConfirm: ''
    });

    const formHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        console.log({formData})
    }

    const createUser = async (e) => {
        e.preventDefault();

        /**
         * create service for this
         */
        await fetch('https://rs-blackmarket-api.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: formData })
        })
        .then(response => response.json())
        .then(data => console.log({data}));
    }

    // const { isPending, error, data } = useQuery({
    //     queryKey: ['createUser'],
    //     queryFn: () => {
    //         fetch('https://api.github.com/repos/TanStack/query')
    //             .then((res) => res.json())
    //         }
    //     })
    
    //     if (isPending) return 'Loading...';

    //     if (error) return 'An error has occurred: ' + error.message;
    // }

//   {
//     "user": {
//       "email": "some-test@email.com",
//       "password": "password",
//       "password_confirmation": "other_password",
//       "name": "some name"
//     }
//   }



  return (
    <>
        <div className="container">
            <form onSubmit={createUser}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formHandler}
                    required
                />
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="name"
                    onChange={formHandler}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formHandler}
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="password_confirmation"
                    onChange={formHandler}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </>
  )
}

export default App

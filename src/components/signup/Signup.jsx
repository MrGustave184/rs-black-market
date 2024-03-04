import { useState } from 'react'
import User from './../../services/user/User'

function Signup() {
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

        const user = new User(formData);
        user.create()
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

  return (
    <>
        {formData && (
            <div className="text-3xl font-bold underline">name: {formData.name}</div>
        )}

        <div className="container w-full max-w-xs">
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

export default Signup
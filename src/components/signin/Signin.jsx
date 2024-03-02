import { useState } from 'react'
import User from '../../services/user/User'

function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const formHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        console.log({formData})
    }

    const signIn = async (e) => {
        e.preventDefault();

        const user = new User(formData);
        user.create()
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

  return (
    <>
        {formData && (
            <div>name: {formData.name}</div>
        )}
        
        <div className="container">
            <form onSubmit={signIn}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
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

                <button type="submit">Sign In</button>
            </form>
        </div>
    </>
  )
}

export default Signin
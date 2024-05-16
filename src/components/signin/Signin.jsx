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
        
        <div className="form-container">
            <form onSubmit={signIn}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        id="email"
                        className="form-control"
                        name="email"
                        onChange={formHandler}
                        required
                    />
                </div>
                <div className="mb-3">

                </div>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formHandler}
                    required
                />

                <button className="btn btn-primary" type="submit">Sign In</button>
            </form>
        </div>
    </>
  )
}

export default Signin
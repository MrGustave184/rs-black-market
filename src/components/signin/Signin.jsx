import { useState } from 'react'
import User from '../../services/user/User'
import styles from './signin.module.css'

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
    <div className={`d-flex align-items-center justify-content-center ${styles.formContainer}`}>
        <div className={`rounded p-4 ${styles.loginCard}`}>
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
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className='form-control'
                        name="password"
                        onChange={formHandler}
                        required
                    />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </div>
            </form>
        </div>
       
    </div>

  )
}

export default Signin
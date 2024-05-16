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

        <div className="w-full max-w-xs">
            <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={createUser}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 p-x3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="email"
                        name="email"
                        onChange={formHandler}
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 p-x3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="fullName"
                        name="name"
                        onChange={formHandler}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 p-x3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        name="password"
                        onChange={formHandler}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 p-x3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        name="password"
                        onChange={formHandler}
                        required
                    />
                </div>

                <button type="submit" className="rounded p-4 text-white bg-black w-full">Sign Up</button>
            </form>
        </div>
    </>
  )
}

export default Signup
import { Outlet, Link } from "react-router-dom";

// applayout
function Root() {
    return (
    <>
        <main className="container">
            {/* header */}
            <h1>Rootstrap black market</h1>
            <h2>Routes test</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/signup'}>Signup</Link></li>
                <li><Link to={'/signin'}>Signin</Link></li>
            </ul>

            <div className="content">
                <Outlet />
            </div>
        </main>
    </>
    );
}

export default Root;
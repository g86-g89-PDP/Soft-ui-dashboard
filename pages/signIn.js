import SignInWrapper from '../styles/signinWrapper'


const SignIn = () => {
    return (
        <SignInWrapper>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid">
                                <a href="#" className="font-weight-bold soft ms-lg-0 ms-3">Soft UI Dashboard</a>
                                <button className="navbar-toggler ms-2 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mt-2">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                                                <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/profile.html">
                                                <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-up.html">
                                                <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-in.html">
                                                <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav d-lg-block d-none">
                                        <li className="nav-itembut">
                                            <a href="#" className="btn btn-sm text-white  mb-0 me-1 ">Free download</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <main className="main-content mt-0">
                <section>
                    <div className="page-header min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                    <div className="cardreader mt-8 shadow">
                                        <div className="card-head pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div classNameName="card-body">
                                            <form role="form">
                                                <label>Email</label>
                                                <div classNameName="mb-3">
                                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                                                </div>
                                                <label>Password</label>
                                                <div classNameName="mb-3">
                                                    <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>

                                                <button type="button" className="signbutton btn w-100 mt-4 mb-0">Sign in</button>

                                            </form>

                                        </div>
                                        <div className="card-footer text-center pt-0">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <a href="javascript:;" className="text-info text-gradient font-weight-bold">Sign up</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </SignInWrapper>
    )
}



export default SignIn;
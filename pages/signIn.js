import SignInWrapper from '../styles/signinWrapper'


const SignIn = () => {
    return (
        <SignInWrapper>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid">
                                <a href="#" className="font-weight-bold ms-lg-0 ms-3">Soft UI Dashboard</a>
                                <button className="navbar-toggler ms-2 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon mt-2">
                                        <span class="navbar-toggler-bar bar1"></span>
                                        <span class="navbar-toggler-bar bar2"></span>
                                        <span class="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div class="collapse navbar-collapse" id="navigation">
                                    <ul class="navbar-nav mx-auto">
                                        <li class="nav-item">
                                            <a class="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                                                <i class="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link me-2" href="../pages/profile.html">
                                                <i class="fa fa-user opacity-6 text-dark me-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link me-2" href="../pages/sign-up.html">
                                                <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link me-2" href="../pages/sign-in.html">
                                                <i class="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="navbar-nav d-lg-block d-none">
                                        <li class="nav-item">
                                            <a href="#" class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">Free download</a>
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
                                    <div className="card mt-8">
                                        <div className="card-head pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="card-body">
                                            <form role="form">
                                                <label>Email</label>
                                                <div className="mb-3">
                                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                                                </div>
                                                <label>Password</label>
                                                <div className="mb-3">
                                                    <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                                                </div>
                                                <div className="form-check">
                                                    <input class="form-check-input" type="checkbox" id="rememberMe" checked="" />
                                                    <label class="form-check-label" for="rememberMe">Remember me</label>
                                                </div>
                                            </form>
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
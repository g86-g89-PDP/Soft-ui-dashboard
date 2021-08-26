import SignInWrapper from './../styles/signInWrapper'


const SignIn = () => {
    return (
        <SignInWrapper>
            <div className="d-flex justify-content-space-between">
                <div><h2>Soft UI Dashboard</h2></div>
                <div>
                    <ul>
                        <li>Dashboard</li>
                        <li>Profile</li>
                        <li>Sign Up</li>
                        <li>Sign In</li>
                    </ul>
                </div>
                <div><button>FREE DOWNLAD</button></div>
            </div>
        </SignInWrapper>
    )
}



export default SignIn;
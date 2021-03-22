import React from 'react'
import './sign-in-and-signup.style.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign_up.component";

const SignInAndSignUpPage = () => {
return (
<div className={'sign-in-and-sign-up'}>
<SignIn/>
<SignUp/>
</div>
)
}
export default SignInAndSignUpPage
import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle }  from '../../firebase/firebase.utils'
import './signin.styles.scss'


class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
            e.preventDefault();

            this.setState({
                email: '',
                password: ''
            })
    }

    handleChange = (e) => {
        
        console.log(e.target);
        const {value, name} = e.target;

        this.setState({
            [name] : value
        })

    }

    render() {
        return(

            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name="email" 
                            type="email" value={this.state.email} label="Email" required/>

                    <FormInput handleChange={this.handleChange} name="password" 
                                type="password" value={this.state.password} label="Password" required/>

                <div className="button">
                    <CustomButton type="submit" >
                        Sign in
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;
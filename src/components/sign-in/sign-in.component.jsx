import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/cutom-button.component'
import { signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        {
            this.setState({email:'', password:''})
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]:value})
    }



    render(){
        return (
            <div className='sign-in'>

                <h2>I already have an Account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit='this.handleSubmit'>
                
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label='Email'
                        required/>
                    
                    <FormInput
                        type='password' 
                        name='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password' 
                        required/>

                    <div className='buttons'>
                        <CustomButton type='submit'>
                        SIGN IN
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        SIGN IN with Google
                        </CustomButton>
                    
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
import React, { useState } from 'react'
import {
    TeacherSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/TeacherSignInStyles'
const TeacherSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIN = () => {
        console.log('Teacher Signing In', {email,password})
    }
  return (
    <TeacherSignInContainer>
        <h2>Teacher Sign In</h2>
        <FormContainer>
            <InputField 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
            />

            <InputField 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            />

            <SubmitButton to='/teacher/dashboard' onClick={handleSignIN}>Sign In</SubmitButton>
        </FormContainer>
    </TeacherSignInContainer>
  )
}

export default TeacherSignIn
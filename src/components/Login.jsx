import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';





const Login = () => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    const pwdRegex = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,10}$/;

    const [errorText, setErrorText] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPwd, setErrorPwd] = useState(" ")
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    );
    // **************** HANDLING INPUTS CHANGE ****************
    const handleChange = (e) => {
        setErrorText(" ")
        setInputs((prevState) => (

            {

                ...prevState,

                [e.target.name]: e.target.value,

            }

        ))


    }

    let navigate = useNavigate();

    // **************** SIGN UP FUNCTION ****************
    const signUp = () => {
        setErrorText("")
        if (inputs.email.match(emailRegex)) {
            setErrorEmail(" ");
        }
        else {
            setErrorEmail("Invalid Email");
        }
        if (inputs.password.match(pwdRegex)) {
            setErrorPwd(" ")
        }
        else {
            setErrorPwd(" Password must have at least one or more letter,number and min lenght of 3");
        }

        if (inputs.email === localStorage.getItem("email")) {

            setErrorText("Useraccount exsists");
        }

        else {
            if (inputs.email.match(emailRegex) && inputs.password.match(pwdRegex)) {
                localStorage.setItem("name", inputs.name);
                localStorage.setItem("email", inputs.email);
                localStorage.setItem("password", inputs.password);
                setErrorText("Accoount Created!")
            }
            else {
                setErrorText("Enter credentials in correct format")
            }
        }
    }

    // **************** LOGIN FUNCTION ****************

    const login = () => {

        if ((inputs.email === "Admin" || inputs.email === localStorage.getItem("email"))
            && (inputs.password === "junaid" || inputs.password === localStorage.getItem("password"))) {

            setInputs({ name: '', email: '', password: '' });



            console.log('Working');
            navigate('/home')


        }
        else {

            setErrorText("User doesn't exsist or Invalid Credentials");


        }


    }

    // **************** SUBMIT FUNCTION ****************
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isSignup) {
            login()
        }

        if (isSignup) {
            signUp()
        }


    }
    // **************** RESETTING THE ERROR TEXTS WHILE TOGGLING ****************

    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({ name: '', email: '', password: '' });
        setErrorText(" ");
        setErrorEmail(" ");
        setErrorPwd(" ")
    };



    return (
        <>

            <form onSubmit={handleSubmit}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    maxWidth={300}
                    alignItems='center'
                    justifyContent={"center"}
                    margin={'auto'}
                    marginTop={7}
                    padding={5}
                    borderRadius={20}
                    boxShadow={'5px 5px 10px black'}
                >
                    <Typography
                        variant='h5'
                        padding={5}
                        marginBottom={5}
                        color={'primary'}>
                        Crypto Tracker
                    </Typography>
                    <Typography
                        variant='h5'
                        padding={5}
                        marginBottom={2}
                        color={'primary'}>

                        {isSignup ? "CREATE ACCOUNT" : "LOGIN"}
                    </Typography>
                    {isSignup && <TextField
                        variant='outlined'
                        margin='normal'
                        style={{ width: '80%' }}
                        placeholder='name'
                        type={'text'}
                        label="name"
                        name='name'
                        value={inputs.name}
                        onChange={handleChange}
                        required


                    />
                    }

                    <TextField
                        variant='outlined'
                        margin='normal'
                        style={{ width: '80%' }}
                        placeholder='email'
                        type={'text'}
                        label="email"
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                        required
                        helperText={errorEmail}



                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        style={{ width: '80%' }}
                        placeholder='password'
                        type={'password'}
                        label="password"
                        name='password'
                        value={inputs.password}
                        onChange={handleChange}
                        required
                        helperText={errorPwd}

                    />
                    <Button
                        variant='contained'
                        color={'primary'}
                        type="submit"
                    >
                        {isSignup ? "Create Account" : "Login"}
                    </Button>

                    <Button
                        onClick={resetState}
                        style={{ marginTop: '15px' }}
                        margin={'normal'}
                        variant={'text'}
                        color={'primary'}

                    >
                        {isSignup ? "Login?" : "Signup?"}
                    </Button>
                    <Typography color='secondary'> {errorText}</Typography>
                </Box>
            </form>
        </>
    )
}

export default Login
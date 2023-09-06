import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import backgroundImage from "./images/Cantier-Background.jpg";
import logo from "./images/cantier-logo.png";

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPasswordValue, setInputPasswordValue] = useState('');
    const [showNameHelper, setShowNameHelper] = useState(false);
    const [showEmailHelper, setShowEmailHelper] = useState(false);
    const [showPasswordHelper, setShowPasswordHelper] = useState(false);


    const handleInputNameChange = (event) => {
        const value = event.target.value;
        setInputNameValue(value);
        setShowNameHelper(value.length > 0);
    };

    const handleInputEmailChange = (event) => {
        const value = event.target.value;
        setInputEmailValue(value);
        setShowEmailHelper(value.length > 0);
    };

    const handleInputPasswordChange = (event) => {
        const value = event.target.value;
        setInputPasswordValue(value);
        setShowPasswordHelper(value.length > 0);
    };


    console.log(isSignup);
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form>
            <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth={400}
                    alignItems="left"
                    justifyContent="left"
                    margin="auto"
                    marginTop={5}
                    padding={6}
                    borderRadius={5}
                    backgroundColor="rgba(255, 255, 255, 0.8)" // Use a semi-transparent white background
                    backdropFilter="blur(20px)" // Apply a blur effect
                    boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1)" // Adjust the shadow
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                >
                    
                    <Typography variant="h2" padding={3} textAlign="center">
                    <img src={logo} alt="Logo" variant ="h1" padding={3} style={{ width: "250px", marginBottom: "40px" }} />
                    </Typography>
                    {isSignup && <Typography variant="h6" padding={0} textAlign="left">Register Form</Typography>}
                    {isSignup && <TextField onChange={handleInputNameChange} value={inputNameValue} margin="normal" type={'text'} variant="outlined" label="Name" helperText={showNameHelper ? '' : <span style={{ color: 'red' }}>* Please enter your name</span>} />}
                    <TextField onChange={handleInputEmailChange} value={inputEmailValue} margin="normal" type={'email'} variant="outlined" label="Email" helperText={showEmailHelper ? '' : <span style={{ color: 'red' }}>* Please enter your email</span>} />
                    <TextField onChange={handleInputPasswordChange} value={inputPasswordValue} margin="normal" type={'password'} variant="outlined" label="Password" helperText={showPasswordHelper ? '' : <span style={{ color: 'red' }}>* Please enter your password</span>} />
                    <Button sx={{ marginTop: 3, borderRadius: 3 }} variant="contained" color="warning"> {isSignup ? "Register" : "Login"}</Button>
                    <Button onClick={() => setIsSignup(!isSignup)} sx={{ marginTop: 3, borderRadius: 3 }}>Change to {isSignup ? "Login" : "Signup"}</Button>
                </Box>

            </form>

        </div>
    );
}

export default Auth;

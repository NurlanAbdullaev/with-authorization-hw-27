import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { USERS_ROLE } from "../constants";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../store/auth/authThunk";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const dispatch = useDispatch();

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };
  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      role: USERS_ROLE.USER,
    };

    dispatch(signUpRequest(data));
  };
  return (
    <div>
      <FormStyled onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            type="text"
            label="Name"
            variant="outlined"
            value={name}
            onChange={onChangeNameHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={onChangeEmailHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={onChangePasswordHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            type="password"
            label="Confirm password"
            variant="outlined"
            value={confirmPassword}
            onChange={onChangeConfirmPasswordHandler}
          />
          <Button sx={{width:"100%"}} type="submit" variant="contained">
            Sign up
          </Button>
          <div>You have an account ? <Link to="/signin">sign in</Link></div>
         
        </Box>
      </FormStyled>
    </div>
  );
};

export default SignUp;

const FormStyled = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 450px;
  background-color: aliceblue;
  margin-top: 200px;
  padding: 30px;
  border-radius: 15px;
`;

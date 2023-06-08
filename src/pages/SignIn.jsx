import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInRequest } from "../store/auth/authThunk";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(signInRequest(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
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
          <StyledTextField
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }}
            value={email}
            onChange={onChangeEmailHandler}
          />

          <StyledTextField
            label="Password"
            variant="filled"
            sx={{ width: "100%" }}
            value={password}
            onChange={onChangePasswordHandler}
          />
          <Button sx={{ width: "100%" }} type="submit" variant="contained">
            Sign in
          </Button>
          <div>
            Don't have an account? <Link to="/signup">sign up</Link>
          </div>
        </Box>
      </FormStyled>
    </div>
  );
};

export default SignIn;

const FormStyled = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 290px;
  background-color: white;
  margin-top: 200px;
  padding: 30px;
  border-radius: 15px;
  border: 4px solid #5a1f08;
`;

const StyledTextField = styled(TextField)`
  /* & hover:border-color: #5a1f08; */
`;

import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UsersLayout from "../Layout/UsersLayout";
import MealLayout from "../Layout/MealLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersLayout />}>
        <Route index element={<MealLayout />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

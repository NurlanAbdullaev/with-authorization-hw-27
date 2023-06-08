import React, { useCallback, useState } from "react";
import { Header } from "../components/header/Header";
import { MealSummary } from "../components/meal-summary/MealSummary";
import { Meals } from "../components/meals/Meals";
import { Outlet } from "react-router-dom";
import { Basket } from "../components/basket/Basket";

const UsersLayout = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div>
      <Header toggleHandler={toggleHandler} />
      {toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UsersLayout;

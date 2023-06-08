// import { useCallback, useState } from "react";
// import { Header } from "./components/header/Header";
// import { MealSummary } from "./components/meal-summary/MealSummary";
// import { Meals } from "./components/meals/Meals";
// import { Basket } from "./components/basket/Basket";
import { Provider } from "react-redux";
import { store } from "./store";
import MainRoutes from "./routes/MainRoutes";

// const AppContent = () => {

//   return (
//     <>
//       <Header toggleHandler={toggleHandler} />
//       <MealSummary />
//       <Meals />
//     </>
//   );
// };

const App = () => {
  return (
    <Provider store={store}>
        <MainRoutes />
    </Provider>
  );
};

export default App;

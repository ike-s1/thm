import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import { StepTwo } from "./pages/StepTwo/StepTwo";
import { StepThree } from "./pages/StepThree/StepThree";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/step-two",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [{  index: true, element: <StepTwo/>}],
  },
  {
    path: "/step-three",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [{  index: true, element: <StepThree/> }],
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFoundPage/>
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

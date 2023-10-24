import { useRoutes } from "react-router-dom";
import Login from "./components/pages/login/index";
import SignUp from "./components/pages/signUp/index";
import ForgotPassword from "./components/pages/forgotPassword";
import Home from "./components/pages/Home";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signUp",
      element: <SignUp />,
    },
    {
      path: "forgotPassword",
      element: <ForgotPassword />,
    },
  ]);

  return (
      <div className="App">
        {routes}
        <p>temprary text for test git branch <b>extra bold text and another text</b></p>
      </div>
    );
}

export default App;

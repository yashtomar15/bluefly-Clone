import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <ProductPage />
        <Signup />
        <Login />
      </div>
    </div>
  );
}

export default App;

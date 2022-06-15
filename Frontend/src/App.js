import Signup from "./components/Signup";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <ProductPage />
        <Signup />
      </div>
    </div>
  );
}

export default App;

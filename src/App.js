import "./App.css";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Feature from "./components/feature/Feature";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Feature />
      <Card />
      <Footer />
    </div>
  );
}

export default App;

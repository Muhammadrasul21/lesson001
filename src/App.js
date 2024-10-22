import "./App.css";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Feature from "./components/feature/Feature";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Feature />
      <Card />
    </div>
  );
}

export default App;

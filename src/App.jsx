import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Views/Home";
import PageNotFound from "./components/Views/PageNotFound";
import { Routes, Route } from "react-router-dom";
import CryptoDetails from "./components/Views/CryptoDetails";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto:id" element={<CryptoDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

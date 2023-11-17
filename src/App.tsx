import Header from "./layouts/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div
      id="app"
      className="h-[100vh] flex justify-center items-centern bg-radial-gradient">
      <div className="dark">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div id="stars"></div>
      </div>
      <Header />
      <Home />
    </div>
  );
}

export default App;

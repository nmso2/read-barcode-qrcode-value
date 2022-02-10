import "./App.css";
import Home from "./Home";
import Home2 from "./Home2";
// import Home3 from "./Home3";

function App() {
  return (
    <div className="App">
      <Home />
      <hr style={{ width: "100%" }} />
      <Home2 />
      <hr style={{ width: "100%" }} />
      {/* <Home3 /> */}
    </div>
  );
}

export default App;

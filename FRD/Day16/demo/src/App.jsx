import "./App.css";
import OptimizeApi from "./components/OptimizeApi/OptimizeApi";
import OptimizePageSize from "./components/OptimizePageSize/OptimizePageSize";
import OptimizeRender from "./components/OptimizeRender/OptimizeRender";

function App() {
  return (
    <div className="container">
      <OptimizeRender />
      {/* <OptimizeApi /> */}
      {/* <OptimizePageSize /> */}
    </div>
  );
}

export default App;

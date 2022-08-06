import "./App.css";
import NewOptimizeApi from "./components/NewOptimizeApi/NewOptimizeApi";
import OptimizeApi from "./components/OptimizeApi/OptimizeApi";
import OptimizePageSize from "./components/OptimizePageSize/OptimizePageSize";
import OptimizeRender from "./components/OptimizeRender/OptimizeRender";

function App() {
  return (
    <div className="container">
      {/* <OptimizeRender /> */}
      <NewOptimizeApi />
      {/* <OptimizePageSize /> */}
    </div>
  );
}

export default App;

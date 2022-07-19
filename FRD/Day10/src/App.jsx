import { useSelector } from "react-redux";
import Todo from "./components/Todo";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  const todoState = useSelector((state) => state);
  console.log("Todo state: ", todoState);

  return (
    <div style={{ padding: "40px" }}>
      <NavigationBar />
      <h1>My todos: {todoState?.length}</h1>

      <Todo />
    </div>
  );
}

export default App;

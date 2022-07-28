import './App.css';
import Cat from './components/Cat';
import Mouse from './components/Mouse';
import UserTable from './components/UserTable';
import withSearch from './components/withSearch'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoTable from './components/TodoTable';

const UserTableWithSearch = withSearch(UserTable, {
  entity: "users",
  searchField: "username"
})

function App() {
  return (
    <div style={{ margin: "30px" }}>
      {/* <Mouse render={(coordinate) => (<Cat coordinate={coordinate}></Cat>)}></Mouse> */}
      <TodoTable></TodoTable>
    </div>
  );
}

export default App;

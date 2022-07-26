import './App.css';
import Cat from './components/Cat';
import Mouse from './components/Mouse';
import UserTable from './components/UserTable';
import withSearch from './components/withSearch'

const UserTableWithSearch = withSearch(UserTable, {
  entity: "users",
  searchField: "username"
})

function App() {
  return (
    <div style={{ margin: "30px" }}>
      <Mouse render={(coordinate) => (<Cat coordinate={coordinate}></Cat>)}></Mouse>
    </div>
  );
}

export default App;

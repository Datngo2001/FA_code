import './App.css';
import UserTable from './components/UserTable';
import withSearch from './components/withSearch'

const UserTableWithSearch = withSearch(UserTable, {
  entity: "users",
  searchField: "username"
})

function App() {
  return (
    <div style={{ margin: "30px" }}>
      <UserTableWithSearch></UserTableWithSearch>
    </div>
  );
}

export default App;

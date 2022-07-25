import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.module.css';
import NavBar from "./components/navbar/NavBar"
import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import Introduce from "./components/introduce/Introduce"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className={styles["container"]}>
        <Introduce></Introduce>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

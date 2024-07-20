import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Navigation/Header";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;

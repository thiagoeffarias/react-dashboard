import "./App.css";
import SideBar from "./components/sidebar/Sidebar";
import MainDashboard from "./components/main_dashboard/MainDashboard";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;

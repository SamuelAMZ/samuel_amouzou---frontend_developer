import Home from "./pages/Home";
import { SideMenuOpenProvider } from "./contexts/IsSideMenuOpenContext";

function App() {
  return (
    <div className="App">
      <SideMenuOpenProvider>
        <Home />
      </SideMenuOpenProvider>
    </div>
  );
}

export default App;

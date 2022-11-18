import Home from "./pages/Home";

// context providers
import { SideMenuOpenProvider } from "./contexts/IsSideMenuOpenContext";
import { IsPopupOpenProvider } from "./contexts/IsPopupOpenContext";
import { AllCapsulesProvider } from "./contexts/AllCapsuleContext";
import { IsloadingCapsulesProvider } from "./contexts/IsLoadingCapsulesContext";

function App() {
  return (
    <div className="App">
      <SideMenuOpenProvider>
        <IsPopupOpenProvider>
          <AllCapsulesProvider>
            <IsloadingCapsulesProvider>
              <Home />
            </IsloadingCapsulesProvider>
          </AllCapsulesProvider>
        </IsPopupOpenProvider>
      </SideMenuOpenProvider>
    </div>
  );
}

export default App;

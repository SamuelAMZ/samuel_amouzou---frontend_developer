import Home from "./pages/Home";

// context providers
import { SideMenuOpenProvider } from "./contexts/IsSideMenuOpenContext";
import { IsPopupOpenProvider } from "./contexts/IsPopupOpenContext";
import { AllCapsulesProvider } from "./contexts/AllCapsuleContext";
import { IsloadingCapsulesProvider } from "./contexts/IsLoadingCapsulesContext";
import { ActiveCapsuleProvider } from "./contexts/ActiveCapsuleContext";

function App() {
  return (
    <div className="App">
      <SideMenuOpenProvider>
        <IsPopupOpenProvider>
          <AllCapsulesProvider>
            <IsloadingCapsulesProvider>
              <ActiveCapsuleProvider>
                <Home />
              </ActiveCapsuleProvider>
            </IsloadingCapsulesProvider>
          </AllCapsulesProvider>
        </IsPopupOpenProvider>
      </SideMenuOpenProvider>
    </div>
  );
}

export default App;

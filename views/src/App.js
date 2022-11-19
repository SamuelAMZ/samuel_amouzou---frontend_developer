import Home from "./pages/Home";

// context providers
import { SideMenuOpenProvider } from "./contexts/IsSideMenuOpenContext";
import { IsPopupOpenProvider } from "./contexts/IsPopupOpenContext";
import { AllCapsulesProvider } from "./contexts/AllCapsuleContext";
import { IsloadingCapsulesProvider } from "./contexts/IsLoadingCapsulesContext";
import { ActiveCapsuleProvider } from "./contexts/ActiveCapsuleContext";
import { CurrentFilterOptionProvider } from "./contexts/CurentFilterOptionsContext";

function App() {
  return (
    <div className="App">
      <SideMenuOpenProvider>
        <IsPopupOpenProvider>
          <AllCapsulesProvider>
            <IsloadingCapsulesProvider>
              <ActiveCapsuleProvider>
                <CurrentFilterOptionProvider>
                  <Home />
                </CurrentFilterOptionProvider>
              </ActiveCapsuleProvider>
            </IsloadingCapsulesProvider>
          </AllCapsulesProvider>
        </IsPopupOpenProvider>
      </SideMenuOpenProvider>
    </div>
  );
}

export default App;

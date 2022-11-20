import Home from "./pages/Home";

// context providers
import { SideMenuOpenProvider } from "./contexts/IsSideMenuOpenContext";
import { IsPopupOpenProvider } from "./contexts/IsPopupOpenContext";
import { AllCapsulesProvider } from "./contexts/AllCapsuleContext";
import { IsloadingCapsulesProvider } from "./contexts/IsLoadingCapsulesContext";
import { ActiveCapsuleProvider } from "./contexts/ActiveCapsuleContext";
import { CurrentFilterOptionProvider } from "./contexts/CurentFilterOptionsContext";
import { ResetFormProvider } from "./contexts/ResetFilterFormContext";
import { CurrentPageProvider } from "./contexts/CurrentPageContext";
import { StepsProvider } from "./contexts/StepsContext";

function App() {
  return (
    <div className="App">
      <SideMenuOpenProvider>
        <IsPopupOpenProvider>
          <AllCapsulesProvider>
            <IsloadingCapsulesProvider>
              <ActiveCapsuleProvider>
                <CurrentFilterOptionProvider>
                  <ResetFormProvider>
                    <CurrentPageProvider>
                      <StepsProvider>
                        <Home />
                      </StepsProvider>
                    </CurrentPageProvider>
                  </ResetFormProvider>
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

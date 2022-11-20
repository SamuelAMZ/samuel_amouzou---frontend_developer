// import testing hooks
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// import the tested component
import Cards from "../components/Cards";

// import it s context providers
import { SideMenuOpenProvider } from "../contexts/IsSideMenuOpenContext";
import { IsPopupOpenProvider } from "../contexts/IsPopupOpenContext";
import { AllCapsulesProvider } from "../contexts/AllCapsuleContext";
import { IsloadingCapsulesProvider } from "../contexts/IsLoadingCapsulesContext";
import { ActiveCapsuleProvider } from "../contexts/ActiveCapsuleContext";
import { CurrentFilterOptionProvider } from "../contexts/CurentFilterOptionsContext";
import { ResetFormProvider } from "../contexts/ResetFilterFormContext";
import { CurrentPageProvider } from "../contexts/CurrentPageContext";
import { StepsProvider } from "../contexts/StepsContext";

// mock tested compoennt for easier reading test
const MockCards = () => {
  return (
    <IsPopupOpenProvider>
      <SideMenuOpenProvider>
        <IsloadingCapsulesProvider>
          <ActiveCapsuleProvider>
            <AllCapsulesProvider>
              <CurrentFilterOptionProvider>
                <ResetFormProvider>
                  <CurrentPageProvider>
                    <StepsProvider>
                      <Cards />
                    </StepsProvider>
                  </CurrentPageProvider>
                </ResetFormProvider>
              </CurrentFilterOptionProvider>
            </AllCapsulesProvider>
          </ActiveCapsuleProvider>
        </IsloadingCapsulesProvider>
      </SideMenuOpenProvider>
    </IsPopupOpenProvider>
  );
};

describe("Capsules cards", () => {
  it("should have capsules cards in the DOM when component monts", async () => {
    render(<MockCards />);
    const cardElement = await screen.findByTestId(/cardC101/i);
    expect(cardElement).toBeInTheDocument();
  });
});

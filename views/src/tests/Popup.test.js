// import testing hooks
import { render, screen, fireEvent } from "@testing-library/react";
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

describe("Popup", () => {
  it("should have popup open when click on one card", async () => {
    render(<MockCards />);
    const singleCardElement = await screen.findByTestId(/cardC101/i);
    fireEvent.click(singleCardElement);
    const popupElement = screen.getByTestId(/popup/i);
    expect(popupElement).toBeInTheDocument();
  });

  it("should load single card data when popup opened", async () => {
    render(<MockCards />);
    const singleCardElement = await screen.findByTestId(/cardC101/i);
    fireEvent.click(singleCardElement);
    const capsuleDetailsElement = await screen.findByTestId(/singleData/i);
    expect(capsuleDetailsElement).toBeInTheDocument();
  });
});

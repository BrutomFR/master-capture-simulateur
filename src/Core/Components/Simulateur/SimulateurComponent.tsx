import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context, IContext } from "src/Utils/context";
import "./.css";
import BodySimulateurComponent from "./Body/BodySimulateurComponent";
import HeaderSimulateurComponent from "./Header/HeaderSimulateurComponent";
import { ISimulateurComponent } from "./props";
const SimulateurComponent: FunctionComponent<ISimulateurComponent> = (
  props
) => {
  const monContext: IContext = useContext(Context);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const nextStep = () => setCurrentStep(currentStep + 1);
  // const previousStep = () => setCurrentStep(currentStep - 1);
  useEffect(() => {
    return () => {
      //
    };
  }, [monContext.simulateur.get]);

  return (
    <div>
      {currentStep === 0 && ( // Si c'est la page de capture
        <div>
          <HeaderSimulateurComponent />
          <BodySimulateurComponent
            currentStep={currentStep}
            nexStep={nextStep}
          />
        </div>
      )}
    </div>
  );
};

export default SimulateurComponent;

import React, { FunctionComponent, useEffect } from "react";
import CaptureComponent from "../Steps/Capture/CaptureComponent";
import EtapesComponent from "../Steps/Etapes/EtapesComponent";
import TarifsComponent from "../Steps/Tarifs/TarifsComponent";
import "./.css";
import { IBodySimulateurComponent } from "./props";
const BodySimulateurComponent: FunctionComponent<IBodySimulateurComponent> = (
  props
) => {
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  return (
    <div>
      {props.currentStep === 0 && <CaptureComponent nextStep={props.nexStep} />}
      {props.currentStep === 1 && (
        <EtapesComponent
          currentEtapeSimulateur={props.currentEtapeSimulateur}
          nextEtape={props.nextEtape}
          nextStep={props.nexStep}
        />
      )}
      {props.currentStep === 2 && <TarifsComponent />}
    </div>
  );
};

export default BodySimulateurComponent;

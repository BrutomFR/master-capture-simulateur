import React, { FunctionComponent, useEffect } from "react";
import CaptureComponent from "../Steps/Capture/CaptureComponent";
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
    </div>
  );
};

export default BodySimulateurComponent;

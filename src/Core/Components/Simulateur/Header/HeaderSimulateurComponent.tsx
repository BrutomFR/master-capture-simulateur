import { Steps } from "antd";
import React, { FunctionComponent, useContext, useEffect } from "react";
import { Context, IContext } from "src/Utils/context";
import "./.css";
const { Step } = Steps;

import { IHeaderSimulateurComponent } from "./props";
const HeaderSimulateurComponent: FunctionComponent<IHeaderSimulateurComponent> = (
  props
) => {
  const monContext: IContext = useContext(Context);
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  return (
    <div className="header">
      <div style={{ marginBottom: "40px" }}>
        <h1>
          <b>ÉTAPES</b>
        </h1>
      </div>
      <Steps current={0} progressDot>
        {monContext.simulateur.get.etapes_view.map((etape, i) => {
          return <Step key={i} title={etape.titre_progressbar} />;
        })}
      </Steps>
    </div>
  );
};

export default HeaderSimulateurComponent;

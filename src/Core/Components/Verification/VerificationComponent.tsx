import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
  // useContext,
} from "react";
import ISimulateur from 'src/Core/Interfaces/User/ISimulateur';
import { Context, IContext } from "src/Utils/context";
import * as FirebaseHelper from "src/Utils/FirebaseHelper";
import SimulateurComponent from "../Simulateur/SimulateurComponent";
import "./.css";
import { IPropsParams, IVerificationComponent } from "./props";

const VerificationComponent: FunctionComponent<IVerificationComponent> = (
  props
) => {
  const monContext: IContext = useContext(Context);
  const params: IPropsParams = props.match.params;
  const [simulatorFound, setSimulatorFound] = useState<boolean>(false);
  useEffect(() => {
    FirebaseHelper.GetSimulateur(params.id).subscribe((simu: ISimulateur) => {
      if (simu === undefined) setSimulatorFound(false);
      else {
        monContext.simulateur.set(simu);
        setSimulatorFound(true);
      }
    });
    return () => {};
  }, []);

  return (
    <div>
      {simulatorFound ? (
        <SimulateurComponent />
      ) : (
        <div>Le simulateur n'existe plus ou n'est pas en ligne.</div>
      )}
    </div>
  );
};

export default VerificationComponent;

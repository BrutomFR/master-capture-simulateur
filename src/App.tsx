import "antd/dist/antd.css";
import { FunctionComponent, useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./.css";
import VerificationComponent from "./Core/Components/Verification/VerificationComponent";
import ISimulateur from "./Core/Interfaces/User/ISimulateur";
import { IReponse } from "./Core/Interfaces/User/Pages_Simulations/Etapes_View/IReponse";
import { IProspects } from "./Core/Interfaces/User/Pages_Simulations/IProspects";
import { Context, IContext } from "./Utils/context";
const App: FunctionComponent = (props) => {
  const [sizeScreen, setSizeScreen] = useState<number>(0);
  const [simulateur, setSimulateur] = useState<ISimulateur>({} as ISimulateur);
  const [prospect, setProspect] = useState<IProspects>({} as IProspects);
  const [response, setResponses] = useState<IReponse[]>([]);
  const getContext: IContext = {
    simulateur: {
      get: simulateur,
      set: setSimulateur,
    },
    SizeScreenUser: {
      get: sizeScreen,
      set: setSizeScreen,
    },
    prospect: {
      get: prospect,
      set: setProspect,
    },
    responses: {
      get: response,
      set: setResponses,
    },
  };
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  return (
    <Context.Provider value={getContext}>
      <BrowserRouter>
        <Switch>
          <Route path="/simulateur/:id" component={VerificationComponent} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;

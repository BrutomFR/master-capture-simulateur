import { FunctionComponent, useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./.css";
import VerificationComponent from "./Core/Components/Verification/VerificationComponent";
import ISimulateur from "./Core/Interfaces/ISimulateur";
import { Context, IContext } from "./Utils/context";
const App: FunctionComponent = (props) => {
  const [sizeScreen, setSizeScreen] = useState<number>(0);
  const [simulateur, setSimulateur] = useState<ISimulateur>({} as ISimulateur);
  const getContext: IContext = {
    simulateur: {
      get: simulateur,
      set: setSimulateur,
    },
    SizeScreenUser: {
      get: sizeScreen,
      set: setSizeScreen,
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
          <Route path="/:id" component={VerificationComponent} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;

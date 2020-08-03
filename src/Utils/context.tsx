import { createContext } from "react";
import ISimulateur from "src/Core/Interfaces/User/ISimulateur";
import { IProspects } from 'src/Core/Interfaces/User/Pages_Simulations/IProspects';

export interface IContext {
  simulateur: {
    get: ISimulateur;
    set: React.Dispatch<React.SetStateAction<ISimulateur>>;
  };
  SizeScreenUser: {
    get: number;
    set: React.Dispatch<React.SetStateAction<number>>;
  };
  prospect: {
    get: IProspects;
    set: React.Dispatch<React.SetStateAction<IProspects>>;
  }
}

export const Context = createContext<IContext>({} as IContext);

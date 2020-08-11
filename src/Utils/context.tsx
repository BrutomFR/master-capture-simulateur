import { createContext } from "react";
import ISimulateur from "src/Core/Interfaces/User/ISimulateur";
import { IReponse } from 'src/Core/Interfaces/User/Pages_Simulations/Etapes_View/IReponse';
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
  responses: {
    get: IReponse[];
    set: React.Dispatch<React.SetStateAction<IReponse[]>>;
  }
}

export const Context = createContext<IContext>({} as IContext);

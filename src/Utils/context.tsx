import { createContext } from "react";
import ISimulateur from 'src/Core/Interfaces/ISimulateur';

export interface IContext {
  simulateur: {
    get: ISimulateur;
    set: React.Dispatch<React.SetStateAction<ISimulateur>>;
  };
  SizeScreenUser: {
    get: number;
    set: React.Dispatch<React.SetStateAction<number>>;
  };
}

export const Context = createContext<IContext>({} as IContext);

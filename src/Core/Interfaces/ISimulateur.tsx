import { IDesign_Configuration } from "./Simulateur/Design_Configuration/IDesign_Configuration";
import IEtape_Capture from "./Simulateur/Etape_Capture/IEtape_Capture";
import IEtape_Tarifs from "./Simulateur/Etape_Tarifs/IEtape_Tarifs";
import { IEtapes_View } from "./Simulateur/IEtapes_View";
import { IProspects } from "./Simulateur/IProspects";
import { IStatistiquesSimulateur } from "./Simulateur/IStatistiquesSimulateur";

// tslint:disable-next-line:class-name
export default interface ISimulateur {
  Nom: string;
  Id: number;
  etapes_view: IEtapes_View[];
  statistiques_simulateurs: IStatistiquesSimulateur[];
  prospects: IProspects[];
  pixel_facebook: string;
  pixel_google: string;
  devise: string;
  design_configuration: IDesign_Configuration;
  etape_capture: IEtape_Capture;
  etape_tarifs: IEtape_Tarifs;
  public: boolean;
  lien_rgpd: string;
}

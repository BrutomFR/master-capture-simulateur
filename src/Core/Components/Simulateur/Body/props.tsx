export interface IBodySimulateurComponent {
  currentStep: number;
  nexStep: () => void;
  currentEtapeSimulateur: number;
  nextEtape: () => void;
}

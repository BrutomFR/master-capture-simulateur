import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { IReponse } from "src/Core/Interfaces/User/Pages_Simulations/Etapes_View/IReponse";
import { Context, IContext } from "src/Utils/context";
import "./.css";
import { ITarifsComponent } from "./props";

const TarifsComponent: FunctionComponent<ITarifsComponent> = (props) => {
  const monContext: IContext = useContext(Context);
  const [responses, setResponses] = useState<IReponse[]>([]);
  const [prix, setPrix] = useState<number>(0);
  const [prixAbonnement, setPrixAbonnement] = useState<number>(0);
  useEffect(() => {
    setResponses(monContext.responses.get);
    let _prix = 0;
    let _abo = 0;
    monContext.responses.get.forEach((rep) => {
      if (rep.abonement) _abo += rep.prix;
      else _prix += rep.prix;
    });
    setPrix(_prix);
    setPrixAbonnement(_abo);
    console.log(_prix);
    return () => {
      //
    };
  }, [monContext.responses]);

  return (
    <div className="container-tarifs">
      <div className="title-tarifs">
        <h1>
          Merci d'avoir pris le temps de répondre au simulateur. Voici le tarif
          approximatif de votre demande.
        </h1>
      </div>
      <div>
        <div className="snip1404">
          <div
            className="plan featured"
            style={{
              backgroundColor:
                monContext.simulateur.get.etape_tarifs.color_plans_tarifs,
            }}
          >
            <header
              style={{
                backgroundColor:
                  monContext.simulateur.get.etape_tarifs.color_tarifs,
              }}
            >
              <h4 className="plan-title">Estimation de votre projet.</h4>
              <div className="plan-cost">
                <div style={{ textAlign: "center" }}>
                  <div className="plan-price-month">Première mensualité</div>
                  <span className="plan-price-one-shot">
                    {prix} {monContext.simulateur.get.devise}
                  </span>
                </div>
                <span>puis </span>
                <span className="plan-price-month">
                  {prixAbonnement} {monContext.simulateur.get.devise}
                </span>
                <span className="plan-type">/mois</span>
              </div>
            </header>
            <ul className="plan-features">
              <h2 style={{ textAlign: "center" }}>VOS OPTIONS</h2>
              {responses.map((rep: IReponse, index) => (
                <li key={index}>➡ {rep.nom_option}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarifsComponent;

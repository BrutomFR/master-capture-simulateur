import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React, { FunctionComponent, useContext, useEffect } from "react";
import { IReponse } from "src/Core/Interfaces/User/Pages_Simulations/Etapes_View/IReponse";
import { Context, IContext } from "src/Utils/context";
import * as FirebaseHelper from "src/Utils/FirebaseHelper";
import "./.css";
import { IEtapesComponent } from "./props";

const EtapesComponent: FunctionComponent<IEtapesComponent> = (props) => {
  const monContext: IContext = useContext(Context);

  useEffect(() => {
    if (
      monContext.simulateur.get.etapes_view.length <=
      props.currentEtapeSimulateur
    ) {
      props.nextStep();
    }
    return () => {
      //
    };
  }, [props.currentEtapeSimulateur]);
  const nextEtape = (reponse: IReponse) => {
    FirebaseHelper.AddReponse(
      monContext.prospect.get,
      reponse,
      monContext.simulateur.get
    );
    props.nextEtape();
  };
  return (
    <div>
      {monContext.simulateur.get.etapes_view.length >
        props.currentEtapeSimulateur && (
        <div className="container-body">
          <h1 style={{ fontSize: "35px" }}>
            <b>
              {
                monContext.simulateur.get.etapes_view[
                  props.currentEtapeSimulateur
                ].question
              }
            </b>
            <Row
              justify="center"
              gutter={{
                md: 24,
                sm: 16,
                xs: 8,
              }}
            >
              {monContext.simulateur.get.etapes_view[
                props.currentEtapeSimulateur
              ].reponses.map((reponse, i) => (
                <Col span={12} key={i}>
                  <Button
                    onClick={() => nextEtape(reponse)}
                    size="large"
                    block
                    type="primary"
                    style={{
                      borderColor: "#3cb371",
                      backgroundColor: "#3cb371",
                      marginTop: "40px",
                    }}
                  >
                    {reponse.reponse}
                  </Button>
                  <QuestionCircleOutlined
                    style={{ fontSize: "50px", padding: "20px" }}
                  />
                  <div
                    style={{ fontSize: "17px" }}
                    dangerouslySetInnerHTML={{
                      __html: reponse.informations,
                    }}
                  />
                </Col>
              ))}
            </Row>
          </h1>
        </div>
      )}
    </div>
  );
};

export default EtapesComponent;

import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { IProspects } from "src/Core/Interfaces/User/Pages_Simulations/IProspects";
import { Context, IContext } from "src/Utils/context";
import * as FirebaseHelper from "src/Utils/FirebaseHelper";
import "./.css";
import { ICaptureComponent } from "./props";

const CaptureComponent: FunctionComponent<ICaptureComponent> = (props) => {
  const monContext: IContext = useContext(Context);
  const [inputPrenom, setInputPrenom] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  useEffect(() => {
    return () => {
      //
    };
  }, []);
  const validCapture = () => {
    // VERIFIER SI EMAIL ET PRENOM SONT REMPLIS
    // AJOUTER EMAIL SI LE PROSPECT N'EST PAS ENCORE PRESENT
    const prospect: IProspects = {
      date: Date.now(),
      email: inputEmail,
      articles: [],
      simulateurs: [],
      prenom: inputPrenom,
    };
    if (inputPrenom.length > 2 && inputEmail.includes("@")) {
      FirebaseHelper.AddProspect(
        prospect,
        monContext.simulateur.get
      ).then((e) => props.nextStep());
    }
    monContext.prospect.set(prospect);
  };
  return (
    <div className="container-body">
      <h1 style={{ fontSize: "35px" }}>
        <b>{monContext.simulateur.get.etape_capture.titre}</b>
      </h1>
      <p style={{ fontSize: "18px" }}>
        <span
          dangerouslySetInnerHTML={{
            __html: monContext.simulateur.get.etape_capture.texte_accroche,
          }}
        />
      </p>
      <div>
        <p style={{ marginTop: "20px" }}>
          {monContext.simulateur.get.etape_capture.prenom}:
        </p>
        <Input
          size="large"
          placeholder="Thomas"
          onChange={(e) => setInputPrenom(e.target.value)}
          prefix={<UserOutlined translate="yes" />}
          value={inputPrenom}
        />
        <p style={{ marginTop: "20px" }}>
          {monContext.simulateur.get.etape_capture.email_capture}:
        </p>
        <Input
          size="large"
          placeholder="email@gmail.com"
          prefix={<MailOutlined translate="yes" />}
          onChange={(e) => setInputEmail(e.target.value)}
          value={inputEmail}
        />
        <Button
          onClick={validCapture}
          size="large"
          block
          type="primary"
          style={{
            borderColor: "#3cb371",
            backgroundColor: "#3cb371",
            marginTop: "40px",
          }}
        >
          {monContext.simulateur.get.etape_capture.button_valide}
        </Button>
      </div>
    </div>
  );
};

export default CaptureComponent;

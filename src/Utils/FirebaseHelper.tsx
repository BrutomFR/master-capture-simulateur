import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Observable } from "rxjs";
import { IUser } from "src/Core/Interfaces/IUser";
import ISimulateur from "src/Core/Interfaces/User/ISimulateur";
import { IReponse } from "src/Core/Interfaces/User/Pages_Simulations/Etapes_View/IReponse";
import { IProspects } from "src/Core/Interfaces/User/Pages_Simulations/IProspects";

// INITIALIZE
export default firebase.initializeApp({
  apiKey: "AIzaSyCZZtKGf_nW4bJ_Wor2VCX71ee-LVecAnE",
  authDomain: "master-capture.firebaseapp.com",
  databaseURL: "https://master-capture.firebaseio.com",
  projectId: "master-capture",
  storageBucket: "master-capture.appspot.com",
  messagingSenderId: "493034871634",
  appId: "1:493034871634:web:3546e8a2c0741b1779b88b",
  measurementId: "G-L78QVCSWW9",
});

export const db = firebase.firestore();

export function GetSimulateur(uid?: number) {
  return new Observable((sub) => {
    db.collection("publics_simulators")
      .doc(uid?.toString())
      .onSnapshot((o) => sub.next(o.data()));
  });
}
export async function AddProspect(
  prospect: IProspects,
  simulateur: ISimulateur
) {
  let user: IUser = (
    await db.collection("users").doc(simulateur.id_user).get()
  ).data() as IUser;

  if (
    !user.simulateurs
      .find((s) => s.Id === simulateur.Id)
      ?.prospects.find((p) => p.email === prospect.email)
  ) {
    // s'il n'existe pas on ajoute le prospect
    user.simulateurs
      .find((s) => s.Id === simulateur.Id)
      ?.prospects.push(prospect);
  } else {
    // S'il existe on réinitialise les données du simulateur
    let simu = user.simulateurs
      .find((s) => s.Id === simulateur.Id)
      ?.prospects.find((p) => p.email === prospect.email)
      ?.simulateurs.find((s) => s.id === simulateur.Id);
    simu?.reponses.splice(0, simu?.reponses.length);
  }
  UpdateClient(simulateur.id_user, user);
}
export function UpdateClient(uid: string, client: IUser) {
  return db.collection("users").doc(uid).update(client);
}

export async function AddReponse(
  prospect: IProspects,
  reponse: IReponse,
  simulateur: ISimulateur
) {
  let user: IUser = (
    await db.collection("users").doc(simulateur.id_user).get()
  ).data() as IUser;

  let _simu = user.simulateurs.find((simu) => simu.Id === simulateur.Id);
  let _prospect = _simu?.prospects.find((p) => p.email === prospect.email);
  let _simuDuProspect = _prospect?.simulateurs.find(
    (s) => s.id === simulateur.Id
  );
  if (_simuDuProspect) {
    // S'il a déjà repondu au simulateur
    _simuDuProspect.reponses.push(reponse);
  } else {
    _prospect?.simulateurs.push({
      date: Date.now(),
      id: simulateur.Id,
      nom: simulateur.Nom,
      reponses: [reponse],
    });
  }
  UpdateClient(simulateur.id_user, user);
}

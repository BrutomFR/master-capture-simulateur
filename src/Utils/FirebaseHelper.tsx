import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Observable } from "rxjs";
// INITIALIZE
export default firebase
  .initializeApp({
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

import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // skr

  // apiKey: "AIzaSyCite8m4legwdnm5lheg10zHrv240KdbUg",
  // authDomain: "tailor-e793a.firebaseapp.com",
  // projectId: "tailor-e793a",
  // storageBucket: "tailor-e793a.appspot.com",
  // messagingSenderId: "147956834895",
  // appId: "1:147956834895:web:a33626c4911153459a803a",
  // measurementId: "G-5RQ1HHDXBV"
  apiKey: "AIzaSyAx4Mp9coYnmyyAuH1O8Wpq1_9o7eYwW64",
  authDomain: "first-app-a75cd.firebaseapp.com",
  projectId: "first-app-a75cd",
  storageBucket: "first-app-a75cd.appspot.com",
  messagingSenderId: "852626297586",
  appId: "1:852626297586:web:e90c2831d407dcd561766b",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
const storage = firebase.storage();

export const customerRef = db.collection("customer");
export const orderRef = db.collection("order");

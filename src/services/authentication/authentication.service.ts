import * as firebase from "firebase";

export const loginRequest = (email: string, password: string) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const createUserRequest = (email: string, password: string) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

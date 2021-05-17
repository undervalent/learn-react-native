import * as React from "react";
import * as firebase from "firebase";

import { AuthInt, UserInt } from "../../types";

import { loginRequest, createUserRequest } from "./authentication.service";
export const AuthenticationContext = React.createContext<AuthInt>({
  user: null,
  isLoading: false,
  error: "",
  onLogin: (email, password): void => {
    console.log({ email, password });
  },
  onRegister: (email, password, repeatPassword) => {
    console.log({ email, password, repeatPassword });
  },
  onLogout: () => {},
  isAuthenticated: false,
});

export const AuthenticationContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState<UserInt | null>(null);
  const [error, setError] = React.useState("");

  firebase.auth().onAuthStateChanged((user: UserInt) => {
    if (user) {
      setUser(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    setError("");
    loginRequest(email, password)
      .then((resp: UserInt) => {
        setUser(resp);
        setError("");
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError("There is a problem with your email or password");
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    setIsLoading(true);
    setError("");
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Passwords do not match");
      return;
    } else {
      createUserRequest(email, password).then((resp: UserInt) => {
        setUser(resp);
        setError("");
        setIsLoading(false);
      });
    }
  };
  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

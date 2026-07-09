import Header from "../Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { api } from "./../utils/api";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

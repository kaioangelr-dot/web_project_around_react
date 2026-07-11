import Header from "../Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { api } from "./../utils/api";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [popup, setPopup] = useState(null);

  const [cards, setCards] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  //form validator
  const [textError, setTextError] = useState("");
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleValidation = (evt) => {
    if (evt.target.name === "name") {
      setNameError(evt.target.validationMessage); //native message for validation
    } else if (evt.target.name === "link") {
      setLinkError(evt.target.validationMessage);
    } else if (evt.target.name === "description") {
      setTextError(evt.target.validationMessage);
    }
    setIsValid(evt.target.closest("form").checkValidity());
  };

  const resetMessageError = () => {
    if (textError) setTextError("");
    if (linkError) setLinkError("");
    if (nameError) setNameError("");
  };

  //close and open popup
  useEffect(() => {
    if (!popup) return;

    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    };

    const handleOverlayClose = (evt) => {
      if (evt.target.classList.contains("popup")) {
        handleClosePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleOverlayClose);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOverlayClose);
    };
  }, [popup]);

  function handleOpenPopup(popup) {
    setPopup(popup);

    setIsValid(false);
  }

  function handleClosePopup() {
    setPopup(null);

    resetMessageError();
  }

  //api calls
  useEffect(() => {
    (async () => {
      await api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  const handleUpdateUser = (data) => {
    setIsLoading(true);
    (async () => {
      await api
        .editUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    })();
  };

  const handleUpdateAvatar = (data) => {
    setIsLoading(true);
    (async () => {
      await api
        .editAvatar(data.avatar)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    })();
  };

  const handleAddPlaceSubmit = (data) => {
    setIsLoading(true);
    (async () => {
      await api
        .addNewCard(data)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          handleClosePopup();
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    })();
  };

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleCardLike(card) {
    await api
      .changeLikeCardStatus(card._id, card.isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then((newCard) => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider
        value={{
          textError,
          linkError,
          nameError,
          isValid,
          isLoading,
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
          handleAddPlaceSubmit,
          handleValidation,
        }}
      >
        <Header />
        <Main
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

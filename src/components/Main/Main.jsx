import avatar from "../../images/avatar.jpg";
import { useState, useEffect, useContext } from "react";
import Popup from "./components/Popup/Popup";

import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import { api } from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const cards = [];

export default function Main(props) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  const { handleOpenPopup, handleClosePopup, popup } = props;

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

  const newCardPopup = {
    title: "Novo Local",
    children: <NewCard />,
  };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile onClose={handleClosePopup} />,
  };
  const editEditAvatar = {
    title: "Alterar a Foto do Perfil",
    children: <EditAvatar />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__image-container"
          onClick={() => handleOpenPopup(editEditAvatar)}
        >
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Edit Profile"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Add Card"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onOpenPopup={handleOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onClosePopup={handleClosePopup}
              currentUser={currentUser}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

import avatar from "../../images/avatar.jpg";
import { useState } from "react";
import Popup from "./components/Popup/Popup";

import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";

function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> }; //prettier-ignore
  const editEditAvatar = { title: "Alterar a foto do perfil", children: <EditAvatar /> }; //prettier-ignore

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__image-container"
          onClick={() => handleOpenPopup(editEditAvatar)}
        >
          <img className="profile__image" src={avatar} alt="Avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Edit Profile"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Add Card"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <template id="card-template">
          <li className="card">
            <img className="card__image" src="null" alt="" />
            <button
              aria-label="Delete Card"
              className="card__delete-button"
              type="button"
            ></button>
            <div className="card__description">
              <h2 className="card__title"></h2>
              <button
                aria-label="Like Button"
                className="card__like-button"
                type="button"
              ></button>
            </div>
          </li>
        </template>
        <ul className="cards__list"></ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;

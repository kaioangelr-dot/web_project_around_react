import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import logo from "./images/logo.svg";
import avatar from "./images/avatar.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="page__content">
      <header class="header page__section">
        <img
          alt="Logotipo Around The U.S."
          class="logo header__logo"
          src={logo}
        />
      </header>
      <main class="content">
        <section class="profile page__section">
          <div class="profile__image-container">
            <img class="profile__image" src={avatar} alt="Avatar" />
          </div>
          <div class="profile__info">
            <h1 class="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              class="profile__edit-button"
              type="button"
            ></button>
            <p class="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            class="profile__add-button"
            type="button"
          ></button>
        </section>
        <section class="cards page__section">
          <template id="card-template">
            <li class="card">
              <img class="card__image" src="" alt="" />
              <button
                aria-label="Excluir cartão"
                class="card__delete-button"
                type="button"
              ></button>
              <div class="card__description">
                <h2 class="card__title"></h2>
                <button
                  aria-label="Botão de curtir"
                  class="card__like-button"
                  type="button"
                ></button>
              </div>
            </li>
          </template>
          <ul class="cards__list"></ul>
        </section>
      </main>
      <footer class="footer page__section">
        <p class="footer__copyright">&#169; 2026 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;

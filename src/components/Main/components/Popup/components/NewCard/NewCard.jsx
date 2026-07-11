import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const {
    handleAddPlaceSubmit,
    handleValidation,
    linkError,
    nameError,
    isValid,
    isLoading,
  } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddPlaceSubmit({ link, name });
  };

  const handleChangeName = (evt) => {
    setName(evt.target.value);

    handleValidation(evt);
  };
  const handleChangeLink = (evt) => {
    setLink(evt.target.value);

    handleValidation(evt);
  };
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_card-name ${nameError && "popup__input_type_error"}`}
          name="name"
          id="place-name"
          placeholder="Título"
          required
          type="text"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChangeName}
        />
        <span
          id="place-name-input-error"
          className={`popup__input-error ${!isValid && "popup__input-error_active"} `}
        >
          {nameError}
        </span>
      </label>
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_url ${linkError && "popup__input_type_error"}`}
          name="link"
          id="link"
          placeholder="Link de Imagem"
          required
          type="url"
          value={link}
          onChange={handleChangeLink}
        />
        <span
          id="link-input-error"
          className={`popup__input-error ${!isValid && "popup__input-error_active"} `}
        >
          {linkError}
        </span>
      </label>

      <button
        className="button popup__button"
        type="submit"
        disabled={!isValid}
      >
        {isLoading ? "Criando..." : "Criar"}
      </button>
    </form>
  );
}

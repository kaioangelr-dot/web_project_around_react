import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile(props) {
  const userContext = useContext(CurrentUserContext);
  const {
    currentUser,
    handleUpdateUser,
    handleValidation,
    textError,
    nameError,
    isValid,
  } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (evt) => {
    setName(evt.target.value);

    handleValidation(evt);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);

    handleValidation(evt);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleUpdateUser({ name, about: description });
  };

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_name ${nameError && "popup__input_type_error"}`}
          name="name"
          id="name"
          placeholder="Nome"
          type="text"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
          required
        />
        <span
          id="name-input-error"
          className={`popup__input-error ${!isValid && "popup__input-error_active"}`}
        >
          {nameError}
        </span>
      </label>
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_description ${textError && "popup__input_type_error"}`}
          name="description"
          id="description"
          placeholder="Sobre mim"
          type="text"
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <span
          id="description-input-error"
          className={`popup__input-error ${!isValid && "popup__input-error_active"}`}
        >
          {textError}
        </span>
      </label>
      <button
        className="button popup__button"
        type="submit"
        disabled={!isValid}
      >
        Salvar
      </button>
    </form>
  );
}

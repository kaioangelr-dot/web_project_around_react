import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar(props) {
  const inputRef = useRef();
  const { currentUser, handleUpdateUser, handleUpdateAvatar } = useContext(CurrentUserContext); /* prettier-ignore */

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input"
          name="link"
          id="link-avatar"
          placeholder="Link de Imagem"
          ref={inputRef}
          required
          type="url"
        />
        <span
          id="link-avatar-input-error"
          className="popup__input-error"
        ></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

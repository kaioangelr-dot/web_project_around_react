export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          id="name"
          placeholder="Nome"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          name="description"
          id="description"
          placeholder="Sobre mim"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          id="description-input-error"
          className="popup__input-error"
        ></span>
      </label>
      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}

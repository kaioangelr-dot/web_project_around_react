function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          name="name"
          id="place-name"
          placeholder="Título"
          required
          type="text"
          minlength="2"
          maxlength="40"
        />
        <span id="place-name-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          id="link"
          placeholder="Link de Imagem"
          required
          type="url"
        />
        <span id="link-input-error" className="popup__input-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default NewCard;

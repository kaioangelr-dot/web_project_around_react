function EditAvatar() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar_url"
          name="link"
          id="link-avatar"
          placeholder="Link de Imagem"
          required
          type="url"
        />
        <span
          id="link-avatar-input-error"
          className="popup__input-error"
        ></span>
      </label>
      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;

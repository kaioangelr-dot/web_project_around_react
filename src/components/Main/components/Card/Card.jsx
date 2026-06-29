import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { onOpenPopup } = props;
  const imageComponent = {
    children: <ImagePopup card={props.card} />,
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => onOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete Card"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like Card"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}

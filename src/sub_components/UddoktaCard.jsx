// components/UddoktaCard.jsx
const UddoktaCard = ({ info }) => {
  return (
    <li>
      <p>{info.serial}</p>
      <p>{info.shopName}</p>
      <p>{info.Uddokta}</p>
    </li>
  );
};

export default UddoktaCard;

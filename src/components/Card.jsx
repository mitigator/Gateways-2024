import { useNavigate } from "react-router-dom";
import "../animation/Card.css";

const Card = ({ name, page }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(page);
  };

  return (
    <div className="card border m-5">
      <b></b>
      <h1 className="title">{name}</h1>
      <div className="content">
        <p className="title">
          <button onClick={handleRegister}>Register Now</button>
        </p>
      </div>
    </div>
  );
};

export default Card;

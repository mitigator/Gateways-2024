
import "../animation/Card.css";

const Card = ({ name }) => {
  return (
    <div className="card border m-5">
      <b></b>
      <h1 className="title">{name}</h1>
      <div className="content">
        <p className="title">
          <button>Register Now</button>
        </p>
      </div>
    </div>
  );
};

export default Card;

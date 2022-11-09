import "./button.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick && onClick} className="button">
      <p>{text}</p>
      <div className="button-active"></div>
    </button>
  );
};

export default Button;

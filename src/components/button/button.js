import "./button.css";

const Button = ({ text }) => {
  return (
    <button className="button">
      <p>{text}</p>
    </button>
  );
};

export default Button;

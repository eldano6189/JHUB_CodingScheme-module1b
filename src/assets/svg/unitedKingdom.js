import { Counties } from "../../data/counties";

const UnitedKingdom = () => {
  return (
    <svg
      width="350"
      height="445"
      viewBox="0 0 350 445"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Counties.map((county, index) => {
        return <path d={county.path} key={index} fill="black" />;
      })}
    </svg>
  );
};

export default UnitedKingdom;

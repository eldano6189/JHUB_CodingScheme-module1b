import { Counties } from "../../data/counties";

const UnitedKingdom = ({ search }) => {
  return (
    <svg
      width="350"
      height="445"
      viewBox="0 0 350 445"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Counties.map((county, index) => {
        return (
          <path
            d={county.path}
            key={index}
            fill={
              county.county.includes(search.toLowerCase())
                ? "rgb(var(--mc1))"
                : "rgb(var(--fc1))"
            }
          />
        );
      })}
    </svg>
  );
};

export default UnitedKingdom;

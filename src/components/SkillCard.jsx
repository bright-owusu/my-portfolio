import propTypes from "prop-types";
// import Skill from "./Skill";a

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={`bg-zinc-50/10 rounded-md flex ${classes}`}>
      <figure className="shrink-0 rounded-l-md bg-slate-600 content-center overflow-hidden">
        <img src={imgSrc} width={75} height={75} alt={label} />
      </figure>

      <div className="self-center p-2">
        <h3>{label}</h3>
        <p className="text-xs text-zinc-500 mt-1">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  classes: propTypes.string,
};

export default SkillCard;

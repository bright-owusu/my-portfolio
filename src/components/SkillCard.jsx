import propTypes from "prop-types"
import Skill from "./Skill"

const SkillCard = ({
  imgSrc,
  label,
  classes
}) => {
  return (
    <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ${classes}`}>
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img 
          src={imgSrc} 
          width={32}
          height={32}
          alt={label} 
        />
      </figure>

      <div>
        <h3>{label}</h3>
      </div>
    </div>
  )
}

SkillCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  classes: propTypes.string
}

export default SkillCard

import propTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, description, tags, link, classes }) => {
  return (
    <div className={`bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors rounded-lg ${classes}`}>
      <figure className="img-box aspect-square rounded-t-lg">
        <img 
          src={imgSrc || "https://via.placeholder.com/150"} 
          alt={title} 
          loading="lazy" 
          className="img-cover" 
        />
      </figure>

      <div className="flex items-center justify-between gap-3 p-3">
        <div>
          <h3 className="title-1 mb-3">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span 
                key={key} 
                className="h-6 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-md"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>
      
      {
        link ? (
          <a 
            href={link} 
            target="_blank" 
            className="absolute inset-0"
          ></a>
        ) : ""
      }
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  tags: propTypes.array.isRequired,
  link: propTypes.string,
  classes: propTypes.string,
};

export default (ProjectCard);

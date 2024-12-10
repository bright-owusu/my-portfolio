import propTypes from "prop-types";

const CertificationCard = ({
  img,
  name,
  description,
  date,
  expiration,
  status,
  classes,
}) => {
  return (
    // <div
    //   className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    // >
    //   <figure className="img-box aspect-square rounded-lg mb-4">
    //     <img
    //       src={img || "https://via.placeholder.com/150"}
    //       alt={name}
    //       loading="lazy"
    //       className="img-cover"
    //     />
    //   </figure>

    //   <div className="flex items-center justify-between gap-4">
    //     <div>
    //       <h3 className="title-1">{name}</h3>
    //       <span className="text-sm text-zinc-400">{description}</span>

    //       {status ? (
    //         <div className="flex flex-wrap items-center gap-2">
    //           <span className="text-sm text-zinc-400">
    //             {status}
    //           </span>
    //         </div>
    //         ) : (
    //           <div className="flex flex-wrap items-center gap-2">
    //             <span className="text-sm text-zinc-400">
    //               {name}
    //             </span>
    //             <span>{date}</span>
    //             <span>{expiration}</span>
    //           </div>
    //         )
    //       }
    //     </div>

    //     <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
    //       <span className="material-symbols-rounded" aria-hidden="true">
    //         arrow_outward
    //       </span>
    //     </div>
    //   </div>
    // </div>

    <div className={`rounded-lg bg-zinc-800 hover:bg-zinc-700/70 transition-colors group ${classes}`}>
      <figure className="img-box aspect-square rounded-t-lg">
        <img
          src={img || "https://via.placeholder.com/150"}
          alt={name}
          loading="lazy"
          className="img-cover"
        />
      </figure>

      <div className="p-3">
        <h3>{name}</h3>
        <p className="text-[0.8rem] text-zinc-400">{description}</p>
        {status ? (
          <div className="flex flex-wrap items-center gap-2">
            <span 
              className="text-[0.7rem] bg-amber-300 text-zinc-950 grid items-center px-2 py-[0.05rem] rounded-md mt-2"
            >
              {status}
            </span>
          </div>
          ) : (
            <div className="flex flex-wrap items-center text-zinc-400 text-[0.85rem] gap-2 mt-2">
              <span>
                <span className="font-semibold">Date:</span> {date}
              </span>
              <span>
                <span className="font-semibold">Expiration:</span> {expiration}
              </span>
            </div>
          )
        }
      </div>
    </div>
  );
};

CertificationCard.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  date: propTypes.string,
  expiration: propTypes.string,
  status: propTypes.string,
  classes: propTypes.string,
};

export default CertificationCard;

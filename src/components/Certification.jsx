import CertificationCard from "./CertificationCard"

const certifications = [
  {
    image: "",
    name: "AWS Certified Cloud Practitioner",
    description: "Amazon Web Services Training and Certification",
    date: "19-Oct-2024",
    expiration: "19-Oct-2027",
    status: "",
  },
  {
    image: "",
    name: "AWS Certified Solutions Architect - Associate",
    description: "Amazon Web Services Training and Certification",
    date: "19-Oct-2024",
    expiration: "19-Oct-2027",
    status: "In Progress",
  },
]

const Certification = () => {
  return (
    <section
      id="certifications" 
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8">
          My Certifications
        </h2>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            certifications.map((certification, index) => (
              <CertificationCard 
                key={index}
                img={certification.image}
                name={certification.name}
                description={certification.description}
                date={certification.date}
                expiration={certification.expiration}
                status={certification.status} 
              />
            ))
          }
        </div>

        {/* <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index}
              img={certification.image}
              name={certification.name}
              description={certification.description}
              date={certification.date}
              expiration={certification.expiration}
              status={certification.status} 
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Certification

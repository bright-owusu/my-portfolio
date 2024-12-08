import { img, label } from "framer-motion/client"
import SkillCard from "./SkillCard"


const frontendItem = [
  {
    imgSrc: '',
    label: 'JavaScript'
  },
  {
    imgSrc: '',
    label: 'HTML'
  },
  {
    imgSrc: '',
    label: 'CSS'
  },
  {
    imgSrc: '',
    label: 'React'
  },
  {
    imgSrc: '',
    label: 'Tailwind CSS'
  },
  {
    imgSrc: '',
    label: 'Bootstrap'
  }
]

const backendItem = [
  {
    imgSrc: '',
    label: 'Python'
  },
  {
    imgSrc: '',
    label: 'Flask'
  },
  {
    imgSrc: '',
    label: 'Django'
  }
]

const cloudDevopsItem = [
  {
    imgSrc: '',
    label: 'AWS'
  },
  {
    imgSrc: '',
    label: 'Terraform'
  },
  {
    imgSrc: '',
    label: 'Docker'
  },
  {
    imgSrc: '',
    label: 'Kubernetes'
  },
  {
    imgSrc: '',
    label: 'Jenkins'
  },
  {
    imgSrc: '',
    label: 'Git'
  },
  {
    imgSrc: '',
    label: 'GitHub'
  },
  {
    imgSrc: '',
    label: 'Ansible'
  },
  {
    imgSrc: '',
    label: 'Prometheus'
  },
  {
    imgSrc: '',
    label: 'Grafana'
  }
]

const databaseItem = [
  {
    imgSrc: '',
    label: 'PostgreSQL'
  },
  {
    imgSrc: '',
    label: 'MySQL'
  }
]


const Skill = () => {
  return (
    <section
      id="skills" 
      className="section"
    >
      {/* <div className="container">
        <h1 className="headline-2">
          Technology Stack
        </h1>
        <div className="">
          <div className="">
            <h2>Frontend</h2>
          </div>

          <div className="">
            <h2>Backend</h2>
          </div>

          <div className="">
            <h2>Database</h2>
          </div>

          <div className="">
            <h2>Cloud and DevOps</h2>
          </div>
        </div>
        
        <h1 className="headline-2">
          Certifications
        </h1>
        <div className="">
          <p>AWS Certified Cloud Practitioner</p>
        </div>
      </div> */}

      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create high performing websites and applications
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            cloudDevopsItem.map((item, index) => (
              <SkillCard 
                key={index}
                imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
                label={item.label}
                classes=""
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill

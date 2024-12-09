import { img, label } from "framer-motion/client"
import SkillCard from "./SkillCard"


const frontendItem = [
  {
    imgSrc: '',
    label: 'JavaScript',
    desc: 'Language for dynamic web development'
  },
  {
    imgSrc: '',
    label: 'HTML',
    desc: 'Standard markup language'
  },
  {
    imgSrc: '',
    label: 'CSS',
    desc: 'Standard Stylesheet language'
  },
  {
    imgSrc: '',
    label: 'React',
    desc: 'JavaScript UI library'
  },
  {
    imgSrc: '',
    label: 'Tailwind CSS',
    desc: 'Utility-first CSS framework'
  },
  {
    imgSrc: '',
    label: 'Bootstrap',
    desc: 'CSS Framework'
  }
];

const backendItem = [
  {
    imgSrc: '',
    label: 'Python',
    desc: 'High-level programming language'
  },
  {
    imgSrc: '',
    label: 'Flask',
    desc: 'Lightweight Python web framework'
  },
  {
    imgSrc: '',
    label: 'Django',
    desc: 'Python web framework'
  }
];

const cloudDevopsItem = [
  {
    imgSrc: '',
    label: 'AWS',
    desc: 'Amazon Web Services - Cloud Provider'
  },
  {
    imgSrc: '',
    label: 'Terraform',
    desc: 'Infrastructure-as-code (IAAC) tool'
  },
  {
    imgSrc: '',
    label: 'Docker',
    desc: 'Build and manage containerized apps'
  },
  {
    imgSrc: '',
    label: 'Kubernetes',
    desc: 'Container orrchestration tool'
  },
  {
    imgSrc: '',
    label: 'Jenkins',
    desc: 'CI/CD tool - Build and automate software delivery pipelines'
  },
  {
    imgSrc: '',
    label: 'Git',
    desc: 'Distributed version control system'
  },
  {
    imgSrc: '',
    label: 'GitHub',
    desc: 'Host and collaborate on Git repositories'
  },
  {
    imgSrc: '',
    label: 'Ansible',
    desc: 'Configuration management tool'
  },
  {
    imgSrc: '',
    label: 'Prometheus',
    desc: 'System monitoring and alerting toolkit'
  },
  {
    imgSrc: '',
    label: 'Grafana',
    desc: 'Visualize metrics and system performance'
  }
];

const databaseItem = [
  {
    imgSrc: '',
    label: 'PostgreSQL',
    desc: 'Open-source relational database system'
  },
  {
    imgSrc: '',
    label: 'MySQL',
    desc: 'Open-source relational database system'
  }
];



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
        <h2 className="headline-2">Essential Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create high performing websites and applications
        </p>

        <div className="headline-3 mb-3">Frontend Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5 pb-8 border-b-[1px] border-zinc-50/10">
          {
            frontendItem.map((item, index) => (
              <SkillCard 
                key={index}
                imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
                label={item.label}
                desc={item.desc}
                classes=""
              />
            ))
          }
        </div>

        <div className="headline-3 mb-3">Backend Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5 pb-8 border-b-[1px] border-zinc-50/10">
          {
            backendItem.map((item, index) => (
              <SkillCard 
                key={index}
                imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
                label={item.label}
                desc={item.desc}
                classes=""
              />
            ))
          }
        </div>

        <div className="headline-3 mb-3">Database Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5 pb-8 border-b-[1px] border-zinc-50/10">
          {
            databaseItem.map((item, index) => (
              <SkillCard 
                key={index}
                imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
                label={item.label}
                desc={item.desc}
                classes=""
              />
            ))
          }
        </div>

        <div className="headline-3 mb-3">Cloud and DevOps Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5">
          {
            cloudDevopsItem.map((item, index) => (
              <SkillCard 
                key={index}
                imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
                label={item.label}
                desc={item.desc}
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

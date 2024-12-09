// import { img, label } from "framer-motion/client"
import SkillCard from "./SkillCard";
import jsIcon from "../assets/images/javascript.png";
import htmlIcon from "../assets/images/html.png"
import cssIcon from "../assets/images/css.png"
import bootstrapIcon from "../assets/images/bootstrap.png"
import tailwindIcon from "../assets/images/tailwind.png"
import reactIcon from "../assets/images/react.png"
import pythonIcon from "../assets/images/python.png"
import flaskIcon from "../assets/images/flask.png"
import djangoIcon from "../assets/images/django.png"
import postgresqlIcon from "../assets/images/postgresql.png"
import mysqlIcon from "../assets/images/mysql.png"
import awsIcon from "../assets/images/aws.png"
import terraformIcon from "../assets/images/terraform.png"
import dockerIcon from "../assets/images/docker.png"
import kubernetesIcon from "../assets/images/kubernetes.png"
import jenkinsIcon from "../assets/images/jenkins.png"
import gitIcon from "../assets/images/git.png"
import githubIcon from "../assets/images/github.png"
import ansibleIcon from "../assets/images/ansible.png"
import prometheusIcon from "../assets/images/prometheus.png"
import grafanaIcon from "../assets/images/grafana.png"

const frontendItem = [
  {
    imgSrc: jsIcon,
    label: "JavaScript",
    desc: "Build interactive websites",
  },
  {
    imgSrc: htmlIcon,
    label: "HTML",
    desc: "Standard markup language",
  },
  {
    imgSrc: cssIcon,
    label: "CSS",
    desc: "Standard Stylesheet language",
  },
  {
    imgSrc: reactIcon,
    label: "React",
    desc: "JavaScript UI library",
  },
  {
    imgSrc: tailwindIcon,
    label: "Tailwind CSS",
    desc: "Utility-first CSS framework",
  },
  {
    imgSrc: bootstrapIcon,
    label: "Bootstrap",
    desc: "CSS Framework",
  },
];

const backendItem = [
  {
    imgSrc: pythonIcon,
    label: "Python",
    desc: "High-level programming language",
  },
  {
    imgSrc: flaskIcon,
    label: "Flask",
    desc: "Lightweight Python web framework",
  },
  {
    imgSrc: djangoIcon,
    label: "Django",
    desc: "Python web framework",
  },
];

const cloudDevopsItem = [
  {
    imgSrc: awsIcon,
    label: "AWS",
    desc: "Amazon Web Services - Cloud Provider",
  },
  {
    imgSrc: terraformIcon,
    label: "Terraform",
    desc: "Infrastructure-as-code (IAAC) tool",
  },
  {
    imgSrc: dockerIcon,
    label: "Docker",
    desc: "Build and deploy containerized apps",
  },
  {
    imgSrc: kubernetesIcon,
    label: "Kubernetes",
    desc: "Container orrchestration tool",
  },
  {
    imgSrc: jenkinsIcon,
    label: "Jenkins",
    desc: "Build CI/CD pipelines",
  },
  {
    imgSrc: gitIcon,
    label: "Git",
    desc: "Distributed version control system",
  },
  {
    imgSrc: githubIcon,
    label: "GitHub",
    desc: "Host and collaborate on Git repositories",
  },
  {
    imgSrc: ansibleIcon,
    label: "Ansible",
    desc: "Configuration management tool",
  },
  {
    imgSrc: prometheusIcon,
    label: "Prometheus",
    desc: "System monitoring and alerting toolkit",
  },
  {
    imgSrc: grafanaIcon,
    label: "Grafana",
    desc: "Visualize metrics and system performance",
  },
];

const databaseItem = [
  {
    imgSrc: postgresqlIcon,
    label: "PostgreSQL",
    desc: "Open-source relational database system",
  },
  {
    imgSrc: mysqlIcon,
    label: "MySQL",
    desc: "Open-source relational database system",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
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
          Discover the powerful tools and technologies I use to create high
          performing websites and applications
        </p>

        <div className="headline-3 mb-3">Frontend Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5 pb-8 border-b-[1px] border-zinc-50/10">
          {frontendItem.map((item, index) => (
            <SkillCard
              key={index}
              imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
              label={item.label}
              desc={item.desc}
              classes=""
            />
          ))}
        </div>

        <div className="headline-3 mb-3">Backend Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5 pb-8 border-b-[1px] border-zinc-50/10">
          {backendItem.map((item, index) => (
            <SkillCard
              key={index}
              imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
              label={item.label}
              desc={item.desc}
              classes=""
            />
          ))}
        </div>

        <div className="headline-3 mb-3">Database Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5 pb-8 border-b-[1px] border-zinc-50/10">
          {databaseItem.map((item, index) => (
            <SkillCard
              key={index}
              imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
              label={item.label}
              desc={item.desc}
              classes=""
            />
          ))}
        </div>

        <div className="headline-3 mb-3">Cloud and DevOps Technologies</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mb-5">
          {cloudDevopsItem.map((item, index) => (
            <SkillCard
              key={index}
              imgSrc={item.imgSrc || "https://via.placeholder.com/150"}
              label={item.label}
              desc={item.desc}
              classes=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

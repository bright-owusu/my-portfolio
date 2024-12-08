import { motion } from 'framer-motion'
import logo from '../assets/images/vite.svg'

const aboutItems = [
  {
    label: 'Projects Done',
    value: 10
  },
  {
    label: 'Years of Experience',
    value: 5
  }
]

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <motion.div 
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ring-1 ring-inset ring-zinc-50/5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Hi, I&apos;m Bright, a passionate DevOps Engineer and software enthusiast with a First-Class Honors in Petroleum Engineering and over six years of professional experience in the oil and gas industry. My journey from the oil and gas industry to the world of DevOps and Cloud Computing reflects my love for innovation and problem-solving. I thrive at the intersection of cutting-edge technology and creative solutions, leveraging tools like Docker, Kubernetes, and Terraform to build impactful software systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{item.value}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl ms-1">+</span>
                  </div>
                  <p className='text-sm text-zinc-400'>{item.label}</p>
                </div>
              ))
            }

            <img 
              src={logo} 
              alt="logo"
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]' 
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

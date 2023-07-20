import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import cv from '../assets/julianSafadiEn.pdf'

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className='xs:w-[350px] min-h-fit w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{ 
            max: 45,
            scale: 1,
            speed: 450
          }}
         className='bg-tertiary rounded-[20px] py-10 px-14 min-h-[600px] flex justify-start items-center flex-col'
         >
          <img src={icon} alt={title} className='w-16 h-16 object-contain mb-4' />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

          <p className="mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {description}
          </p>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>ABOUT ME.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a front-end developer in search of my first professional experience in IT. Specialized in React, and with knowledge in back-end, I am interested in deploying scalable and user-friendly projects, taking into account UX strategies. My current English level is B2, while I continue to improve. I would like to be part of a working team, surrounded by more experienced individuals to help achieve objectives, and at the same time, continue learning new tools and technologies constantly.
      </motion.p>
      <motion.div variants={textVariant()}>
        <a href={cv} download='Julian Safadi'> 
          <button type='button' className='bg-tertiary mt-6 py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl'>
            Download CV
          </button>
        </a>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        { services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        )) }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")

import IntroCard from "./IntroCard"
import styles from './AboutCard.module.css'

/* eslint-disable react/prop-types */
const AboutCard=({organisation})=>{

    return(
        <div className={styles.aboutCardContainer}>
            <div className={styles.organisationName}>{organisation.nAme}</div>
            <div className={styles.organisationDescription}>{organisation.description}</div>
            {organisation.members.map((member)=>(<IntroCard key={member.id} member={member} ></IntroCard>))}
        </div>
    )

}

export default AboutCard

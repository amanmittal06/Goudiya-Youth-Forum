import styles from './EditorialCommittee.module.css'
import NikhilGrewal from './Images/NikhilGrewal.jpg'
import GehnaSahni from './Images/GehnaSahni.jpg'
import ShreyaGrewal from './Images/ShreyaGrewal.jpg'
import IntroCard from './IntroCard';

const committeeMembers = [
    {id:1 , nAme : 'Nikhil Grewal', image: NikhilGrewal , designation: 'Editorial Designer' , description: 'Shri Nikhil Grewal holds B.Tech in Computer Science and Engineering from Netaji Shubhas University of Technology(formerly NSIT, Delhi). He became member of GYF in December 2022 and has been taking very serious interest in all activities of GYF. Since the inception of GYF Newsletter he has been designing the entire letter single handedly as core member of GYF Newsletter committee.' },
    {id:2 , nAme : 'Gehna Sahni', image: GehnaSahni , designation: 'Contributing writer' , description: 'Ms. Gehna Sahni holds a B.A in socialogy from Bharti college, University of Delhi. She holds a masters in Developemental Studies from Ambedkar University. She is a founding member of GYF and a prolific writer. She edits the content of the newsletter and additionally writes her own articles.' },
    {id:3 , nAme : 'Shreya Grewal', image: ShreyaGrewal , designation: 'Proofreader' , description: 'Ms. Shreya Grewal holds B.Sc. in Mathematics from Bharti College, University of Delhi. She joined GYF in March 2023 and has been taking very serious interest in GYF activities. She is known for her precision and focus. She helps in layout and design of the newsltter in addition does a entire proof reading of the entire newsletter.' }
  ];

const EditorialCommittee = () => {

    return(
        <div className={styles.container}>
          <div className={styles.heading}>Editorial Committee</div>
          <div className={styles.description}>The Goudiya Youth Forum Editorial Committee is a dedicated team responsible for producing our insightful magazine. They work collaboratively to create a publication that reflects the spirit and values of the Goudiya Youth Forum, ensuring each issue is visually appealing, thought-provoking, and meticulously reviewed for accuracy. Their collective effort fosters knowledge and community growth, providing readers with inspiring stories and valuable insights.</div>
          {
            committeeMembers.map((member)=>(<IntroCard key={member.id} member={member}></IntroCard>))
          }
        </div>
    )

}

export default EditorialCommittee
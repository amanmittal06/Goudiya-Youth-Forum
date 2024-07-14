import styles from './EditorialCommittee.module.css'
import Human from './Images/Human.png'
import NikhilGrewal from './Images/NikhilGrewal.jpg'
import GehnaSahni from './Images/GehnaSahni.jpg'
import ShreyaGrewal from './Images/ShreyaGrewal.jpg'
import IntroCard from './IntroCard';

const committeeMembers = [
    {id:1 , nAme : 'Nikhil Grewal', image: NikhilGrewal , designation: 'Editorial Designer' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
    {id:2 , nAme : 'Gehna Sahni', image: GehnaSahni , designation: 'Contributing writer' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
    {id:3 , nAme : 'Shreya Grewal', image: ShreyaGrewal , designation: 'Proofreader' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' }
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
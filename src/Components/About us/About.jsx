import Human from './Images/Human.png'
import NarayanMaharajJi from './Images/NarayanMaharajJi.jpg'
import VanMaharajJi from './Images/VanMaharajJi.jpg'
import PadmanabhMaharajJi from './Images/PadmanabhMaharajJi.jpg'
import NeerajPrabhuji from './Images/NeerajPrabhuji.jpg'
import AboutCard from "./AboutCard"

const gyfMembers = [
  {id:1 , nAme : 'HH Padmanabh Maharaj', image: PadmanabhMaharajJi , designation: 'Guiding Light' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  {id:2 , nAme : 'Dr. Neeraj Sahrma', image: NeerajPrabhuji , designation: 'Program Director' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  {id:3 , nAme : 'HG Mallikarjun Mishra', image: Human , designation: 'Program Co-ordinator' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.'}];


const igvtMembers = [
  {id:1 , nAme : 'HDG Narayan Maharaj', image: NarayanMaharajJi , designation: 'Founder Acharya' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  {id:2 , nAme : 'HH Van Maharaj', image: VanMaharajJi , designation: 'President' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' }
];

const organisations = [
  {id:1 , nAme: 'Goudiya Youth Forum' , description : 'Goudiya Youth Forum (GYF) is a very unique program specifically meant for the youth of the country. This program is inspired by Shrila Gurudev - Jagad Guru Paramhansa Parivrajak Acharya Shrila Bhakti Vedanata Narayan Goswami Maharaj and blessed by Pujyapad Bhakti Vedanta Padmanabh Maharaj. Prof. (Dr.) Neeraj Sharma is the founding Director of this initiative. This initiative specifically inculcates the spiritual values of highest order in the youth helping them develope a holistic personality. The program has regular classes on saturday, spiritual excursions, festival celebrations, monthly newsletters etc. The program has benefitted youth by gaining punctuality and discipline, deeper focus on main issues of life both spiritually and materially.', members: gyfMembers},
  {id:2 , nAme: 'International Goudiya Vedanata Trust' , description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.', members: igvtMembers},
  
]

const About = () =>{
    return(
      organisations.map((organisation)=>(<AboutCard key={organisation.id} organisation={organisation}></AboutCard>)) 
    )
}
export default About


import Human from './Images/Human.png'
import NarayanMaharajJi from './Images/NarayanMaharajJi.jpg'
import VanMaharajJi from './Images/VanMaharajJi.jpg'
import PadmanabhMaharajJi from './Images/PadmanabhMaharajJi.jpg'
import NeerajPrabhuji from './Images/NeerajPrabhuji.jpg'
import AboutCard from "./AboutCard"

const gyfMembers = [
  {id:1 , nAme : 'HH Padmanabh Maharaj', image: PadmanabhMaharajJi , designation: 'Guiding Light' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  {id:2 , nAme : 'Dr. Neeraj Sahrma', image: NeerajPrabhuji , designation: 'Program Director' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  {id:3 , nAme : 'HG Mallikaarjun Mishra', image: Human , designation: 'Program Co-ordinator' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.'}];


const igvtMembers = [
  {id:1 , nAme : 'HDG Narayan Maharaj', image: NarayanMaharajJi , designation: 'Founder Acharya' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  {id:2 , nAme : 'HH Van Maharaj', image: VanMaharajJi , designation: 'President' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' }
];

const organisations = [
  {id:1 , nAme: 'Goudiya Youth Forum' , description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.', members: gyfMembers},
  {id:2 , nAme: 'International Goudiya Vedanata Trust' , description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.', members: igvtMembers},
  
]

const About = () =>{
    return(
      organisations.map((organisation)=>(<AboutCard key={organisation.id} organisation={organisation}></AboutCard>)) 
    )
}
export default About
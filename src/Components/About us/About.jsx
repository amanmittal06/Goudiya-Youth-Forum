// import Human from './Images/Human.png'
import NarayanMaharajJi from './Images/NarayanMaharajJi.jpg'
// import VanMaharajJi from './Images/VanMaharajJi.jpg'
import PadmanabhMaharajJi from './Images/PadmanabhMaharajJi.jpg'
import NeerajPrabhuji from './Images/NeerajPrabhuji.jpg'
import AboutCard from "./AboutCard"

const gyfMembers = [
  {id:1 , nAme : 'HH Padmanabh Maharaj', image: PadmanabhMaharajJi , designation: 'Guiding Light' , description: `Pujuapad Bhakti Vededanta Pamanabh Maharaj holds a B Tech in Chemical Engineering from National Insitute of Technology Warangal. Post this engineering degree, he took admission in Doctorate Program (PhD) at university of Florida, USA. During his PhD program he started seving the mission of Vaishanavas and finally surrendered at the dust of Shrila Gurudeva Jagad Guru Bhakti Vedanta Narayan Goswami Maharaj in the year 2003. He served at the Shri Keshavji Goudiya Math for next 13 years from 2003. In the year 2016, he decided to start the preaching work and
stayed in Jammu for next few years. In the year 2022 he agreed to hold the position of Secretary at International Goudiya Vedanta Trust ( IGVT) and has been staying at Shri Raman Vihari Goudiya Math, Janakpuri, New Delhi. In the last few months he conducted his preaching tours at South Africa, Malaysia, Dubai and multiple cities at USA. He is the beacon light for all the programs at Goudiya Math, Janakpuri, which includes LMPY, GYF, LG, 3G, Bhakta Bandhava Service etc.
` },
  {id:2 , nAme : 'Prof. (Dr.) Neeraj Sahrma', image: NeerajPrabhuji , designation: 'Program Director' , description: `Shripad Nand Kishore Das started coming to math since 2004 and then he took shelter of his Gurudeva Jagad Guru His Divine Grace Shrila Bhakti Vedanta Narayan Goswami Maharaj in the year 2006. He has been offering his services at Shri Raman Vihari Goudiya Math, Janakpuri since then. He has been the founder member of the Life Management Program for You ( LMPY) since Sunday, March 27th, 2016 and also of Goudiya Youth forum (GYF) since Saturday, Jujly 2022. He also initiated the morning chanting session from March 2024 . He has conducted various spiritual workshops at various schools and colleges including IIT Delhi, IIT Kharagpur, IIT Bhubaneshwar, IIM Ahmedabad, IIM Calcutta, Delhi Technological University to name a few.
He holds a PhD in Strategic Management from IIT Delhi and an M Tech from IIT Kharagpur. He as worked in senior leadership roles in the marquee companies like Hughes, NIIT, upGrad etc. Currently, he is a Professor of Practice at TERI Schools of Advanced Studies and a Visiting Professor at Delhi Technological University. He runs an Education-Training & Placement company myDiksha in the capacity of Co-Founder and Chief Academic Officer.
` },
  // {id:3 , nAme : 'HG Mallikarjun Mishra', image: Human , designation: 'Program Co-ordinator' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.'}
  ];


const igvtMembers = [
  {id:1 , nAme : 'HDG Narayan Maharaj', image: NarayanMaharajJi , designation: 'Founder Acharya' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' },
  // {id:2 , nAme : 'HH Van Maharaj', image: VanMaharajJi , designation: 'President' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sunt dolorum, distinctio libero dignissimos perspiciatis doloribus accusamus nobis fugit esse corrupti aliquid repellat tempore possimus aliquam consectetur optio debitis.' }
];

const organisations = [
  {id:1 , nAme: 'Goudiya Youth Forum' , description : 'Goudiya Youth Forum (GYF) is a very unique program specifically meant for the youth of the country. This program is inspired by Shrila Gurudev - Jagad Guru Paramhansa Parivrajak Acharya Shrila Bhakti Vedanata Narayan Goswami Maharaj and blessed by Pujyapad Bhakti Vedanta Padmanabh Maharaj. Prof. (Dr.) Neeraj Sharma is the founding Director of this initiative. This initiative specifically inculcates the spiritual values of highest order in the youth helping them develope a holistic personality. The program has regular classes on saturday, spiritual excursions, festival celebrations, monthly newsletters etc. The program has benefitted youth by gaining punctuality and discipline, deeper focus on main issues of life both spiritually and materially.', members: gyfMembers},
  {id:2 , nAme: 'International Goudiya Vedanata Trust' , description : `To preserve and protect the teachings of the disciplic succession of the Rupanuga Guru Varga, the Divine Spiritual Masters which have been passed down in the 500 year old lineage from the time of the advent of the Great Master and incarnation of Lord Shri Krishna known as Shri Krishna Chaitanya Mahaprabhu. To benedict the world at large by teaching the all-auspicious and all beneficial practice of Sankirtan, congregational chanting of the Holy Names of the Supreme Personality of Godhead, especially the powerful sixteen word mantra known as the MAHA-MANTRA, the great chanting for deliverance in this iron age of Kali-yuga. To accomplish the above goals through the distribution and presentation of literatures, audio and video recordings, transcribed lectures, and transcendental art.`, members: igvtMembers},
  
]

const About = () =>{
    return(
      organisations.map((organisation)=>(<AboutCard key={organisation.id} organisation={organisation}></AboutCard>)) 
    )
}
export default About


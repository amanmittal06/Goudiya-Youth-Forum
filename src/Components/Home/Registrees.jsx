import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall} from "react-icons/io";

const Registrees = () =>{

    let registrees = [
        {id:1, name:'Aman Mittal', mobile: 6388082087, email:'amanagrawal0139@gmail.com'},
        {id:2, name:'Ishaan Taneja', mobile: 9205155401, email:'amanagrawal0139@gmail.com'}
    ]
    
    return (
        <ul>
            {registrees.map((registree)=><li key={registree.id}>
               <p>{registree.name}</p>
               <a  href={`https://wa.me/${registree.mobile}`}><FaWhatsapp/></a>
               <a  href={`tel:${registree.mobile}`} target='_blank'><IoMdCall/></a>
            </li>)}
        </ul>
    )
}

export default Registrees
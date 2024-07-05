import styles from './FooterSection.module.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { PiCopyrightLight } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";



const FooterSection = () =>{
    return(
        <div className={styles.footerSection}>
           <center> 
             <div className={styles.usefulLinksContainer}>
              <div ><FaExternalLinkAlt/></div>  
              <p style={{fontSize:'90%', whiteSpace:'nowrap'}}>USEFUL LINKS:</p>
              <a className ={styles.usefulLinks}href="https://www.purebhakti.com/resources/ebooks-magazines" target='_blank'>Resources</a>
              <a className ={styles.usefulLinks}href="https://www.harikatha.com/audios/" target='_blank'>Harikatha</a>
              <a className ={styles.usefulLinks}href="https://www.igvt.org" target='_blank'>IGVT</a>

             </div>
             <div className={styles.followUs}>
              <a className ={styles.footerLinks}href="https://www.instagram.com/goudiyayouthforum/" target='_blank'><FaInstagram/></a>
              <a className ={styles.footerLinks}href="https://www.facebook.com/gaudiyayouthforum" target='_blank'><FaFacebook/></a>
              <a className ={styles.footerLinks}href="mailto:goudiyayouthforum05@gmail.com" target='_blank'><CgMail/></a>
             </div>
             <div className={styles.copyright}><PiCopyrightLight/> 2024 Goudiya Youth Forum</div>
            </center>
        </div>
    )
}

export default FooterSection
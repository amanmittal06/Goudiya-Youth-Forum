import { useState } from "react";
import NewsLetterCard from "./NewsLetterCard";
import ScrollToTop from "../ScrollToTop";
import styles from './AllVolumes.module.css'
import { useLocation } from "react-router-dom";

const allVolumes = [
  {id:'3', title:'GYF NEWSLETTER VOLUME-18', description: undefined, coverPage: "/newsletters/CoverImages/CoverImageVol18.png", downloadLink: "/newsletters/volume18.pdf"},
  {id:'2', title:'GYF NEWSLETTER VOLUME-17', description: undefined, coverPage: "/newsletters/CoverImages/CoverImageVol17.png", downloadLink: "/newsletters/volume17.pdf"},
  {id:'1', title:'GYF NEWSLETTER VOLUME-16', description: undefined, coverPage: "/newsletters/CoverImages/CoverImageVol16.png", downloadLink: "/newsletters/volume16.pdf"}
    
  ];
  

const itemsPerPage =2;

const AllVolumes = () => {

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(allVolumes.length / itemsPerPage);
  
    // Determine items to display on current page
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentItems = allVolumes.slice(startIdx, startIdx + itemsPerPage);
  
    // Function to handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      // window.scrollTo(0,0);
      window.scrollTo(0,0);
      
    };

    // const {pathname} = useLocation();
  
    return (
      <div className={styles.allVolumesContainer}>
        {/* <div className={styles.heading}>{pathname}</div> */}
        <div><NewsLetterCard  newsletters={currentItems} ></NewsLetterCard></div>
        <div className={styles.buttonsSection}>
          <button

            className={styles.navigationButton}
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            {'<<'}
          </button>
          <button

            className={styles.navigationButton}
            onClick={() => handlePageChange(currentPage-1)}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={styles.navigationButton}
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={styles.navigationButton}
            onClick={() => handlePageChange(currentPage+1)}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
          <button

            className={styles.navigationButton}
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            {'>>'}
          </button>
        </div>
      </div>
    );

}

export default AllVolumes
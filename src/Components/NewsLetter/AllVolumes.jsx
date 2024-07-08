import { useState } from "react";
import NewsLetterCard from "./NewsLetterCard";
import vol10CoverPage from './Images/vol10CoverPage.jpg'

const allVolumes = [
    {id:'11', title:'GYF NEWSLETTER VOLUME-11', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'1', title:'GYF NEWSLETTER VOLUME-10', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'2', title:'GYF NEWSLETTER VOLUME-9', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'3', title:'GYF NEWSLETTER VOLUME-8', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'4', title:'GYF NEWSLETTER VOLUME-7', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'5', title:'GYF NEWSLETTER VOLUME-6', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'6', title:'GYF NEWSLETTER VOLUME-5', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'7', title:'GYF NEWSLETTER VOLUME-4', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'8', title:'GYF NEWSLETTER VOLUME-3', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'9', title:'GYF NEWSLETTER VOLUME-2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
    {id:'10', title:'GYF NEWSLETTER VOLUME-1', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, culpa impedit voluptatibus suscipit quidem sunt ducimus rem molestias voluptates deserunt doloremque voluptas eaque eligendi tempora harum! Rerum odit quaerat explicabo.', coverPage: vol10CoverPage},
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
    };
  
    return (
      <div>
        <NewsLetterCard newsletters={currentItems}></NewsLetterCard>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );

}

export default AllVolumes
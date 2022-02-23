import React from 'react';
import './style.css';

const Pagination = ({ postsPerPage, totalPosts, paginate ,currentPage}) => {
  const pageNumbers = [];
  let check = Math.floor(totalPosts / postsPerPage)

  for (let i = 1; i <= Math.floor(totalPosts / postsPerPage); i++) {
    let active = currentPage === i ? 'active' : ''
  pageNumbers.push(<li className={`page-item ${active}`}key={i} onClick={()=>paginate(i)}><p className='page-link'>{i}</p></li>);
  }

  return (
    <nav>
      <ul className='pagination-container pagination'>
        {currentPage > 1 ? <li className='page-item' onClick={()=>paginate(currentPage - 1)}><p className="page-link" >Prev</p></li>:''}
        {pageNumbers}
        {currentPage < check  ? <li className='page-item' onClick={()=>paginate(currentPage + 1)}><p className="page-link" >Next</p></li>:''}
      </ul>
    </nav>
  );
};

export default Pagination;
import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber,setpageNumber}) => {

  return(
       <div >
    <ReactPaginate 
    previousLabel="Anterior"nextLabel="Siguiente"className='pagination justify-content-center' 
     pageCount={info.pages} 
     nextClassName="btn  "  previousClassName='btn '
     pageClassName='page-item'
     pageLinkClassName='page-link'
     activeClassName='active'         
     onPageChange={(data)=>setpageNumber(data.selected+1)}
     />
     </div> 
)

}

export default Pagination
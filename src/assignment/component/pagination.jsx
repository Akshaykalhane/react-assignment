import React from 'react'
import './pagination.css';

function Pagination({data ,perPost ,setCurrentPage , currentPage }) {
    let arr=[];
    for(let i=1;i<=Math.ceil( data/perPost);i++){
        arr.push(i)
    }
  return (
    <>
    <div className='pagination'>
        {
            arr.map((el)=><button className={ el==currentPage ? 'active'  : ''} onClick={()=>setCurrentPage(el)}>{el}</button>)
        }
    </div>
    </>
  )
}

export default Pagination
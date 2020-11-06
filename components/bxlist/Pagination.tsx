import React from 'react'

interface IProps {
    currentPage:number,
    loopIndex:number,
    handleNavi:(e, loopIndex) => void
}

const Pagination:React.FC<IProps> = ({currentPage, loopIndex, handleNavi}) => {
    return (
        <a href="#" className={currentPage == loopIndex ? "on" : "off"}  onClick={(e)=>{handleNavi(e,loopIndex)}}>
            {loopIndex}aa
        </a>
    )
}

export default Pagination

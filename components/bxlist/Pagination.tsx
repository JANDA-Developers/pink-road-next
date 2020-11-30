import React from 'react'

interface IProps {
    currentPage: number,
    loopIndex: number,
    onNavi: (e: any, loopIndex: any) => void
}

const Pagination: React.FC<IProps> = ({ currentPage, loopIndex, onNavi: handleNavi }) => {
    return (
        <a href="#" className={currentPage == loopIndex ? "on" : "off"} onClick={(e) => { handleNavi(e, loopIndex) }}>
            {loopIndex}aa
        </a>
    )
}

export default Pagination

import React from 'react'

interface IProps {
    id:number,
    sort:string,
    title:string,
    newPost:boolean,
    date:string
}

const Bxlist:React.FC<IProps> = ({id, sort, title, newPost, date}) => {

    function newPostIcon(){
        return   <object
                    className="new"
                    type="image/svg+xml"
                    data="../img/svg/new.svg"
                        >
                    new
                  </object>
    }

    return (
        <li>
            <div className="td01">{id}</div>
            <div className="td02">
                <span className={sort == '공지' ? "ct_01": sort == '안내' ? "ct_02" : ""}>{sort}</span>
            </div>
            <div className="td03">
                {title}
                {
                    newPost ? newPostIcon() : ''
                }
            </div>
            <div className="td04">
                {date}
            </div>
        </li>
    )
}

export default Bxlist

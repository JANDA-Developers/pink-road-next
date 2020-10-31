import React from 'react';

interface IProp { }

export const SumNailViewer: React.FC<IProp> = () => {
    return <div className="details_photo">
        <div className="main_photo">
            <img src="/src/img/sample_01.gif" alt="선택된 썸네일 이미지" />
        </div>
        <ul className="photo_list">
            <li className="on">
                <span>
                    <img src="/src/img/sample_01.gif" alt="썸네일 이미지1" />
                </span>
            </li>
            <li>
                <span>
                    <img src="/src/img/sample_01.gif" alt="썸네일 이미지2" />
                </span>
            </li>
            <li>
                <span>
                    <img src="/src/img/sample_01.gif" alt="썸네일 이미지3" />
                </span>
            </li>
            <li>
                <span>
                    <img src="/src/img/sample_01.gif" alt="썸네일 이미지4" />
                </span>
            </li>
        </ul>
        <div className="details_info_txt">
            <i className="flaticon-flag-1" />
      안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!안내문!!!!!!
    </div>
    </div>;
};

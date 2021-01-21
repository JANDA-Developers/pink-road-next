import { ISet, TElements } from "../../types/interface"
import { ViewCount } from "../common/ViewCount"
import Excel from "../excel/Execel"


interface IProps {
    Sort: TElements;
    handleSelectAll: () => void;
    LeftDiv?: TElements;
    viewCount?: number;
    setViewCount: ISet<number>;
    excelData?: any[]
    rightDiv?: TElements;
}

export const MasterAlignMent: React.FC<IProps> = ({ excelData, handleSelectAll, Sort, LeftDiv, viewCount, setViewCount, rightDiv }) => {
    return <div className="alignment">
        <div className="left_div">
            {LeftDiv}
            {/* <ul className="board_option">
                <li className="on"><a href="/"전체<strong>46</strong></a></li>
                <li><a href="/">여행<strong>23</strong></a></li>
                <li><a href="/">체험<strong>23</strong></a></li>
            </ul> */}
            {/* <ul className="board_option">
        <li className="on"><a href="/">전체<strong>46</strong></a></li>
        <li><a href="/">온라인예약<strong>46</strong></a></li>
        <li><a href="/">수기등록<strong>46</strong></a></li>
    </ul> */}
        </div>
        <div className="right_div">
            <ul className="board_option">
                <li onClick={handleSelectAll}><a>전체선택</a></li>
                {excelData && <li><Excel data={excelData || []} element={<a>엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a>} /></li>}
                {rightDiv}
            </ul>
            {Sort}
            {/* <select onChange={()=>{}} className="sel01">
            <option >출발일 &uarr;</option>
            <option>출발일 &darr;</option>
            <option>등록일 &uarr;</option>
            <option>등록일 &darr;</option>
        </select> */}
            <ViewCount value={viewCount || 0} onChange={setViewCount} />
        </div>
    </div>
}
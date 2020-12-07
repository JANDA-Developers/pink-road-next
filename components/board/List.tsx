import { Paginater } from 'components/common/Paginator';
import React from 'react';
import SearchMini from 'components/common/SearchMini';
import { IDiv, IPageInfo, TElements } from 'types/interface';
import { autoComma } from 'utils/formatter';
import SortSelect from '../common/SortMethod';
import { ViewCount } from '../common/ViewCount';
import { ViewSelect } from '../common/ViewSelect';

interface IProp extends IDiv {
  context?: any;
  onWrite?: () => void;
  onSearch?: (data: string) => void;
  pageInfo?: IPageInfo;
  totalCount?: number;
  Categories?: TElements;
  addBtnLabel?: string;
  viewCount: number
  view: "line" | "gal"
  setSort: any
  sort: any
  setView: any
  setViewCount: any
}

export const BoardList: React.FC<IProp> = ({ setViewCount, children, Categories, onWrite: handleWrite, onSearch: handleSearch, pageInfo, totalCount, addBtnLabel, setSort, setView, sort, view, viewCount, ...props }) => {
  return <div {...props} className={`w1200 board_box ${props.className}`} >
    <div>
      {Categories}
      <div className="alignment">
        <div className="left_div"><span className="infotxt">총 <strong>{autoComma(totalCount)}</strong>개</span></div>
        <div className="right_div">
          <SortSelect onChange={setSort} sort={sort} />
          <ViewCount value={viewCount} onChange={setViewCount} />
          <ViewSelect select={view} onChange={setView} />
        </div>
      </div>
      {children}
      {pageInfo && <Paginater pageInfo={pageInfo} />}
      <div className="tl list_bottom">
        {/* member/상품 등록하기 */}
        <div className="btn_footer">
          <span onClick={handleWrite} className="xet_btn medium gray">{addBtnLabel}</span>
        </div>
        {handleSearch && <SearchMini onSubmit={handleSearch} />}
      </div>
    </div>
  </div>
};

export default BoardList;
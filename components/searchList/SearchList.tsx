import React, { useState } from "react";
import { useNewsList } from "../../hook/useNews";
import { useProductList } from "../../hook/useProduct";
import isEmpty from "../../utils/isEmpty";
import { generateListQueryHook } from "../../utils/query";
import SortSelect from "../common/SortMethod";
import { ViewCount } from "../common/ViewCount";
import { ViewSelect } from "../common/ViewSelect";
import { BoardListBlock } from "../list/BoardListBlock";
import { ProductListBlock } from "../list/ProductList";
import { ProductPhotoBlock } from "../list/ProductPhoto";

interface IProp {
    onClickViewMore: () => void;
    title: string;
    listQuery: ReturnType<typeof generateListQueryHook>;
    listQueryVariables: Parameters<ReturnType<typeof generateListQueryHook>>;
}

export const SearchList: React.FC<IProp> = ({
    listQuery,
    title,
    onClickViewMore,
    listQueryVariables,
}) => {
    const {
        setSort,
        setViewCount,
        sort,
        viewCount,
        pageInfo,
        items,
    } = listQuery(...listQueryVariables);

    return (
        <div>
            <div id="ProductViewer" className="con_box">
                <div className="alignment">
                    <div className="left_div">
                        <h5>
                            {title}
                            <strong>{pageInfo.totalCount}</strong>
                        </h5>
                    </div>
                    <div className="right_div">
                        <SortSelect onChange={setSort} sort={sort as any} />
                        {/* <ViewCount value={viewCount} onChange={setViewCount} /> */}
                    </div>
                </div>

                <div className="board_list st05">
                    <div className="tbody">
                        <div>
                            {isEmpty(items) && (
                                <div className="no__data">
                                    <span>검색 결과가 없습니다.</span>
                                </div>
                            )}
                            <ul>
                                {items.map((baord) => (
                                    <BoardListBlock
                                        board={baord as any}
                                        key={(baord as any)._id}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/*   <Paginater setPage={setBoardPage} pageInfo={paging} />
    <Paginater setPage={setPage} pageInfo={pageInfo} /> */}

                {!isEmpty(items) && (
                    <div
                        onClick={onClickViewMore}
                        className="Allsearch__plusBtn"
                    >
                        {title} 더보기{" "}
                        <i className="jandaicon-arr4-right plus "></i>
                    </div>
                )}
            </div>
        </div>
    );
};

// {isProdView && <div>

//     {/*검색결과가 없을때*/}
//     {noProduct && <div className="no_search">
//         <i className="jandaicon-info3" />
//         <div>검색결과 없음</div>
//     </div>}
//     {/*리스트로 보기*/}
//     {view === "line" && <div className="list selectViewList">
//         <ul className="list_ul">
//             {filteredProducts.map(product =>
//                 <ProductListBlock key={product._id} product={product} />
//             )}
//         </ul>
//     </div>}
//     {/*이미지로 보기*/}
//     {view === "gal" &&
//         <div className="list selectViewImg">
//             <ul className="list_ul line3">
//                 {filteredProducts.map(product =>
//                     <ProductPhotoBlock key={product._id} item={product} />
//                 )}
//             </ul>
//         </div>}
// </div>}

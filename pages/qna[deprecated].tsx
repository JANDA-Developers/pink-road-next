import React from 'react';
import { QStatus } from '../types/interface';
import { QnaLi } from '../components/qna/QnaLi';
import { IUseQuestionList, useQuestionList } from '../hook/useQuestion';

interface IProp {
    context: IQnaWrapContext
}

export const QnaTable: React.FC<IProp> = ({ context }) => {
    const { items } = context;
    return <div className="board_list_mini ln04">
        <div className="thead">
            <div className="th01">No.</div>
            <div className="th02">제목</div>
            <div className="th03">글쓴이</div>
            <div className="th04">날짜</div>
        </div>
        <div className="tbody">
            <ul>
                {items.map(qs =>
                    <QnaLi key={qs._id} question={qs} />
                )}
            </ul>
        </div>
        <div className="boardNavigation">
            <div className="float_left">
                <div className="pagenate_mini">
                    <div className="page_btn first">
                        <i className="jandaicon-arr4-left" />
                    </div>
                    <div className="count">
                        <strong>1</strong> / 10
                    </div>
                    <div className="page_btn end">
                        <i className="jandaicon-arr4-right" />
                    </div>
                </div>
            </div>
            <div className="float_right">
                <a className="mini_btn small">
                    고객센터 문의하기
                </a>
            </div>
        </div>
    </div>;
};


interface IQnaWrapContext extends IUseQuestionList {
}

export const QnaTableWrap = () => {
    const questionListHook = useQuestionList();
    const context = questionListHook;
    return <QnaTable context={context} />
}

export default QnaTable;
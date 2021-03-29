import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useAnswerCreate, useAnswerDelete, useAnswerUpdate } from '../../hook/useAnswer';
import { IUseModal } from '../../hook/useModal';
import { useProductReviewFindById } from '../../hook/useReview';
import { AppContext } from '../../pages/_app';
import { BG, BGprofile } from '../../types/const';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { CommentWrite } from '../comment/CommentWrite';
import { Change } from '../loadingList/LoadingList';
import { RatingStar } from '../rating/Rating';


export interface IModalInfo {
    reviewId: string;
}

interface IProp extends IUseModal<IModalInfo> { }

export const ReviewModal: React.FC<IProp> = ({ info, isOpen, closeModal }) => {
    const { isManager, myProfile } = useContext(AppContext);

    const [reply, setReply] = useState(false);
    const [comment, setComment] = useState("")

    const router = useRouter();

    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [answerCreate] = useAnswerCreate();
    const [answerDelete] = useAnswerDelete();
    const [answerUpdate] = useAnswerUpdate();

    const { item: review, getData, data, loading } = useProductReviewFindById(info?.reviewId, {
        skip: !info?.reviewId
    })
    const isMyProduct = myProfile?._id === review?.productAuthorId
    const isReplayAble = isMyProduct || isManager;

    const next = data?.ProductReviewFindById.nextId;
    const prev = data?.ProductReviewFindById.beforeId;
    const move = (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        getData({
            variables: {
                id
            }
        })
    }

    const handleReply = () => {
        setReply(true);
    }

    if (!review) return null;
    return <Change change={!loading}>
        <div onClick={closeModal} className={`popup_bg__review ${isOpen && "popup_bg__review--open"}`}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="popup_bg__review__in in_txt">
                <div className="popup_bg__review__headerWrap">
                    <a className="popup_bg__review__headerClose close_icon"><i className="flaticon-multiply"></i></a>
                </div>
                <div className="popup_bg__review__body">
                    <div className="popup_bg__review_page">
                        <div style={BG(review.attachFiles?.[photoIndex]?.uri || "")} className="review__photo">
                        </div>
                        <div className="review__photo_cunt">
                            {prev && <div onClick={move(prev)} className="left"></div>}
                            {next && <div onClick={move(next)} className="right"></div>}
                        </div>
                        <div className="review__txt">
                            <div className="con__01">
                                <div className="review__box popup">
                                    <ul className="review__list">
                                        <li >
                                            <div className="top">
                                                <div style={BGprofile(review.author?.profileImg)} className="review__list_pr" />
                                                <div className="review__list_star">
                                                    <RatingStar readonly initialRating={review.rating} />
                                                </div>
                                                <div className="review__list_info">
                                                    <strong>{review.num}</strong>
                                                    <span className="name">{review.authorName}</span><span className="day">{yyyymmdd(review.createdAt)}</span>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <p>{review.contents}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="con__02">
                                <ul className="review__photoList">
                                    {review.attachFiles?.map((file, i) =>
                                        <li onClick={() => {
                                            setPhotoIndex(i);
                                        }} style={BG(file.uri)} key={"reviewImgFile" + i}></li>
                                    )}
                                </ul>
                            </div>
                            {/* {(question.answers || []).filter(answer => !answer?.isDelete).map(answer =>
                                <Comment title={answer?.author?.nickName} onCompleteEdit={handleEdit} onDelete={handleAnswerDelete(answer!)} key={answer?._id}  {...answer!} />
                            )} */}
                            <CommentWrite onSubmit={setComment} defaultContent="" title={comment} />
                            {isReplayAble &&
                                <button onClick={handleReply} className="btn samll">답변하기</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Change>;
};

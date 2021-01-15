import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { NotiLine } from '../../components/notification/NotiLine';
import { useSystemNotiHide, useSystemNotiList, useSystemNotiRead } from '../../hook/useSystemNoti';
import { MypageLayout } from '../../layout/MypageLayout';
import { ALLOW_LOGINED } from '../../types/const';
import { groupDateArray } from '../../utils/group';
import { auth } from '../../utils/with';

interface IProp { }

export const Notification: React.FC<IProp> = () => {
    const { items, refetch } = useSystemNotiList();
    const ids = items.map(i => i._id);
    const groupItems = groupDateArray(items, "createdAt");
    const [hideMu] = useSystemNotiHide({ variables: { ids } });
    const [readMu] = useSystemNotiRead({ variables: { ids } });

    const handleRefresh = () => {
        if (refetch)
            refetch()
    }

    const handleHideAll = () => {
        hideMu()
    }

    useEffect(() => {
        readMu();
    }, [items.length]);


    return <MypageLayout>
        <div className="in notification_box">
            <h4>알림</h4>
            <div className="paper_div">
                <div className="alignment">
                    <div className="left_div"></div>
                    <div className="right_div">
                        <div className="all_del">
                            <button onClick={handleHideAll} className="btn">모두삭제</button>
                        </div>
                        <div onClick={handleRefresh} className="re-set">
                            <button className="btn">새로고침</button>
                        </div>
                    </div>
                </div>

                <div className="notification_list">
                    {groupItems.map((group, index) =>
                        <div key={"notificationDateGroup" + index} className="date_fom">
                            <div className="ovj">
                                <span><i className="svg"><img src="/img/svg/inform_icon4.svg" alt="" /></i>오늘</span>
                            </div>
                            <div className="right">
                                {group.items.map(item =>
                                    <NotiLine key={item._id} systemNoti={item} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    </MypageLayout>
};

export default auth(ALLOW_LOGINED)(Notification);
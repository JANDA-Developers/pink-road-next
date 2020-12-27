import React from 'react';
import { useUnReadSystemNotiFind } from '../../hook/useSystemNoti';

interface IProp { }

export const NotiIcon: React.FC<IProp> = () => {
    const { items } = useUnReadSystemNotiFind();
    const count = items.length;
    const countString = count > 99 ? "99+" : count;

    return <div className="inform_icon">
        <object type="image/svg+xml" data={'/img/svg/inform_icon4.svg'}>
            현재 브라우저는 iframe을 지원하지 않습니다.
    </object>
        <button />
        {countString ? <span className="number">{countString}</span> : ""}
    </div>;
};

import React from 'react';
import ProfileBusi from 'components/mypage/ProfileBusi';
import ProfileIndi from 'components/mypage/ProfileIndi';
import ProfileIndiBusi from 'components/mypage/ProfileIndiBsui';

interface IProp { }

export const MyPageProfile: React.FC<IProp> = () => {
    return <div >
        {/* 개인 */}
        <ProfileIndi />
        {/* //개인 */}
        {/* 기업파트너 */}
        <ProfileBusi />
        {/* //기업파트너 */}
        <ProfileIndiBusi />
    </div>;
};

export default MyPageProfile;
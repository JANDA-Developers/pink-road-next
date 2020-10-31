import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { MypageLayout } from '../../layout/MypageLayout';
const MyProfile = React.lazy(() => import('./MyPageProfile'));
const MyBasket = React.lazy(() => import('./basket'));
const MyGoods = React.lazy(() => import('./goods'));
const MyWrite = React.lazy(() => import('./MyPageMyWrite'));
const MyPlainning = React.lazy(() => import('./MyPagePlainning'));
const MyReservation = React.lazy(() => import('./MyPageReservation'));
const MySettlement = React.lazy(() => import('./MyPageSettlement'));


export enum MyPaths {
    MyProfile = "/my-page",
    myWrite = "/my-page/write",
    myPlainning = "/my-page/plainning",
    myGoods = "/my-page/goods",
    myBasket = "/my-page/basket",
    myPurchase = "/my-page/purchase",
    mySettlement = "/my-page/settlement",
    myReservation = "/my-page/reservation",
}

interface IProp { }

export const Mypage: React.FC<IProp> = () => {
    return <MypageLayout>
        <Suspense fallback={"loading"}>
            <Route exact path={MyPaths.MyProfile} render={(prop) => <MyProfile {...prop} />} />
            <Route exact path={MyPaths.myWrite} render={(prop) => <MyWrite {...prop} />} />
            <Route exact path={MyPaths.myBasket} render={(prop) => <MyBasket {...prop} />} />
            <Route exact path={MyPaths.myGoods} render={(prop) => <MyGoods {...prop} />} />
            <Route exact path={MyPaths.myPlainning} render={(prop) => <MyWrite {...prop} />} />
            <Route exact path={MyPaths.myPurchase} render={(prop) => <MyPlainning {...prop} />} />
            <Route exact path={MyPaths.myReservation} render={(prop) => <MyReservation {...prop} />} />
            <Route exact path={MyPaths.mySettlement} render={(prop) => <MySettlement {...prop} />} />
        </Suspense>
    </MypageLayout>
};

export default Mypage;

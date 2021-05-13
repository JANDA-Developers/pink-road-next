import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Basket } from "../../components/basket/Basket";
import { IUseBasket, useBasket } from "../../hook/useBasket";
import { usePageEdit } from "../../hook/usePageEdit";
import SubTopNav from "../../layout/components/SubTop";
import { MypageLayout } from "../../layout/MypageLayout";
import { Page } from "../../utils/generateClientPaging";
import { getStaticPageInfo } from "../../utils/page";
import { AppContext } from "../_app";
import anonymousBracketInfo from "../../info/anonymousBracket";

interface IProp {
    pageInfo: Page;
    context: IUseBasket;
}

export const MyPageBasket: React.FC<IProp> = ({ context, pageInfo }) => {
    const { isLogin } = useContext(AppContext);
    const { items, updateComponent } = context;
    const router = useRouter();
    const pageTools = usePageEdit(
        { pageInfo: pageInfo, pageKey: "anonymousBracket" },
        anonymousBracketInfo
    );

    const handleOrder = () => {
        router.push("/payment");
    };

    const goToShop = () => {
        router.back();
    };

    const SubNav = isLogin ? (
        <>
            <li className="homedeps1">
                <Link href="/mypage/notification">
                    <a>My page</a>
                </Link>
            </li>
            {isLogin && (
                <li className="homedeps2">
                    <Link href="/mypage">
                        <a>회원정보</a>
                    </Link>
                </li>
            )}
        </>
    ) : (
        <>
            <li className="homedeps1">
                <Link href="/mypage/basekt">
                    <a>장바구니</a>
                </Link>
            </li>
        </>
    );

    const Content = (
        <div>
            <h4>장바구니</h4>
            <div className="paper_div">
                <div className="top_info">
                    <ul>
                        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                        <li>
                            가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수
                            있습니다.
                        </li>
                    </ul>
                </div>

                <Basket
                    items={items}
                    updateComponent={updateComponent}
                    Buttons={
                        <div className="baket_btn">
                            <div className="left">
                                <button onClick={goToShop} className="btn">
                                    쇼핑 계속하기
                                </button>
                                <button
                                    onClick={handleOrder}
                                    className="btn orders"
                                >
                                    결제하기
                                </button>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );

    if (!isLogin)
        return (
            <div>
                <div>
                    <SubTopNav pageTools={pageTools}>{SubNav}</SubTopNav>
                </div>
                <div className="mypage_in w100">
                    <div className="w1200">
                        <div className="in baskebt_box">{Content}</div>;
                    </div>
                    ;
                </div>
                ;
            </div>
        );
    return <MypageLayout>{Content}</MypageLayout>;
};

export const getStaticProps = getStaticPageInfo("anonymousBracket");
export const MyPageBasketWrap = (pageInfo: Page) => {
    const basketHook = useBasket();
    const context: IUseBasket = basketHook;
    return <MyPageBasket pageInfo={pageInfo} context={context} />;
};

export default MyPageBasketWrap;

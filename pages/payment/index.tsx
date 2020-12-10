import { useState } from "react";
import { Basket } from "../../components/basket/Basket";
import { getAuth } from "../../components/nice/getAuth";
import NiceElments from "../../components/nice/NiceElement";
import { generateNiceData } from "../../components/nice/niceUtils";
import { IAuthInfo } from "../../components/nice/type";
import { JDpaymentUI, TPaySubmitInfo } from "../../components/payment/JDpaymentUI";
import { IUseBasket, useBasket } from "../../hook/useBasket";
import { useBookingsCreate, useBookingFindByCode } from "../../hook/useBooking";
import PaymentLayout from "../../layout/PaymentLayout";
import { BookingsCreateInput, Fbooking } from "../../types/api";
import { getFromUrl } from "../../utils/url";

interface IcustomParams {
    groupCode: string,
    redirectUrl: string
    failRedirectUrl: string
}
interface IProp {
    context: IUseBasket;
}

export const Payment: React.FC<IProp> = ({ context }) => {
    const { items, totalPrice, updateComponent } = context;
    const urlBKcode = getFromUrl("code") || "";
    const [authData, setAuthData] = useState<IAuthInfo>();
    const [createdBookings, setCreatedBookings] = useState<Fbooking[]>();
    const [customParams, setCustomParams] = useState<IcustomParams>();
    const { booking: findBooking } = useBookingFindByCode(urlBKcode);
    const { bookingsCreate } = useBookingsCreate();

    const startPay = () => {
        auth(totalPrice)
    }

    const handleBooking = (param: TPaySubmitInfo) => {
        const params: BookingsCreateInput[] = items.map(item => ({
            adultCount: item.count.adult,
            babyCount: item.count.baby,
            kidCount: item.count.kids,
            email: param.buyerInfo.phone,
            name: param.buyerInfo.name,
            phoneNumber: param.buyerInfo.phone,
            message: "",
            product: item._id
        }))

        bookingsCreate({
            params,
        }, (bks) => {
            const groupCode = bks[0]?.groupCode;
            const customParams: IcustomParams = {
                groupCode,
                redirectUrl: process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/payment/complete?groupCode=" + groupCode,
                failRedirectUrl: process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/payment/fail"
            }
            setCreatedBookings(bks);
            setCustomParams(customParams);
            startPay();
        })
    }

    const auth = async (price: number) => {
        const { data } = await getAuth(price);
        if (data.ediDate) {
            setAuthData(data);
        }
        else {
            throw Error("this asdasd")
        }
    }

    return <PaymentLayout>
        {JSON.stringify(customParams || {})}
        {authData && createdBookings[0] && <NiceElments ReqReserved={encodeURIComponent(JSON.stringify(customParams || {}))}
            {...generateNiceData({
                auth: {
                    Amt: totalPrice.toString(),
                    EdiDate: authData.ediDate,
                    MID: authData.mid,
                    hex: authData.hashString
                },
                buy: {
                    BuyerEmail: createdBookings[0].email,
                    BuyerName: createdBookings[0].name,
                    BuyerTel: createdBookings[0].phoneNumber,
                    GoodsName: createdBookings.map(bk => bk.product.title).join(" | "),
                },
                groupCode: customParams.groupCode
            })}
        />}
        <JDpaymentUI onDoPay={handleBooking} booking={findBooking} Preview={
            <Basket updateComponent={updateComponent} items={items} />
        } />
    </PaymentLayout>
};

export const PaymentWrap: React.FC = () => {
    const basketHook: IUseBasket = useBasket()
    const context = basketHook;

    return <Payment context={context} />
}

export default PaymentWrap
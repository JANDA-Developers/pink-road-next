import { useEffect, useState } from "react";
import { Basket } from "../../components/basket/Basket";
import { getAuth } from "../../components/nice/getAuth";
import NiceElments from "../../components/nice/NiceElement";
import { generateNiceData } from "../../components/nice/niceUtils";
import { IAuthInfo } from "../../components/nice/type";
import { JDpaymentUI, TPaySubmitInfo } from "../../components/payment/JDpaymentUI";
import { IUseBasket, useBasket } from "../../hook/useBasket";
import { useBookingFindByCode, useBookingsCreate } from "../../hook/useBooking";
import PaymentLayout from "../../layout/PaymentLayout";
import { bookingFindByCode_BookingFindByCode_data, BookingsCreateInput, bookingsCreate_BookingsCreate_data, Fbooking, PayMethod } from "../../types/api";
import { getFromUrl } from "../../utils/url";

interface IcustomParams {
    groupCode: string,
    redirectUrl: string
    failRedirectUrl: string
}
interface IProp {
}

export const Payment: React.FC<IProp> = ({ }) => {
    const urlBKcode = getFromUrl("code") || "";
    const [authData, setAuthData] = useState<IAuthInfo>();
    const [createdBookings, setCreatedBookings] = useState<bookingsCreate_BookingsCreate_data[]>([]);
    const [customParams, setCustomParams] = useState<IcustomParams>();
    const { item: findBooking } = useBookingFindByCode(urlBKcode);
    const [bookingCreate] = useBookingsCreate();
    const { items, totalPrice, updateComponent, getLoading }: IUseBasket = useBasket()
    const [payMethod, setPayMethod] = useState(PayMethod.NICEPAY_CARD);

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
            product: item._id,
            payMethod: param.payMethod
        }))

        bookingCreate({
            variables: {
                params,
                payMethod
            }
        }).then(result => {
            if (result.data?.BookingsCreate.ok) {
                const bks = result.data.BookingsCreate.data || []
                const groupCode = bks[0]?.groupCode;
                const customParams: IcustomParams = {
                    groupCode,
                    redirectUrl: process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/payment/complete?groupCode=" + groupCode,
                    failRedirectUrl: process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/payment/fail"
                }
                setCreatedBookings(bks);
                setCustomParams(customParams);
                startPay();
            }
        })
    }

    const auth = async (price: number) => {
        alert("auth occcurend");
        const { data } = await getAuth(price);
        if (data.ediDate) {
            setAuthData(data);
        }
        else {
            throw Error("this asdasd")
        }
    }

    //인증 받을 데이터
    const niceAuth = {
        Amt: totalPrice.toString(),
        EdiDate: authData?.ediDate || "",
        MID: authData?.mid || "",
        hex: authData?.hashString || ""
    }

    const niceBuy = {
        BuyerEmail: createdBookings[0]?.email || "",
        BuyerName: createdBookings[0]?.name || "",
        BuyerTel: createdBookings[0]?.phoneNumber || "",
        GoodsName: "예약상품",
    }

    return <PaymentLayout>
        <NiceElments ReqReserved={encodeURIComponent(JSON.stringify(customParams || {}))}
            {...generateNiceData({
                auth: niceAuth,
                buy: niceBuy,
                groupCode: customParams?.groupCode || ""
            })}
        />
        <JDpaymentUI onDoPay={handleBooking} booking={findBooking} Preview={
            getLoading ? <div /> : <Basket updateComponent={updateComponent} items={items} />
        } />
    </PaymentLayout>
};
export default Payment
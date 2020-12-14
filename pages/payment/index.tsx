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
import { BookingsCreateInput, Fbooking } from "../../types/api";
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
    const [createdBookings, setCreatedBookings] = useState<Fbooking[]>([]);
    const [customParams, setCustomParams] = useState<IcustomParams>();
    const { item: findBooking } = useBookingFindByCode(urlBKcode);
    const [bookingCreate, { loading }] = useBookingsCreate();
    const { items, totalPrice, updateComponent, getLoading }: IUseBasket = useBasket()

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

        bookingCreate({
            variables: {
                params
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
        const { data } = await getAuth(price);
        if (data.ediDate) {
            setAuthData(data);
        }
        else {
            throw Error("this asdasd")
        }
    }

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
        GoodsName: createdBookings?.map(bk => bk.product.title).join(" | ") || "",
    }

    return <PaymentLayout>
        {JSON.stringify(customParams || {})}
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
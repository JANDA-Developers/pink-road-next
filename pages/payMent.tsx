import { useState } from "react";
import { Basket } from "../components/basket/Basket";
import { getAuth } from "../components/nice/getAuth";
import NiceElments from "../components/nice/NiceElement";
import { getNiceElementForTest } from "../components/nice/niceUtils";
import { IAuthInfo } from "../components/nice/type";
import { JDpaymentUI, TPaySubmitInfo } from "../components/payment/JDpaymentUI";
import { IUseBasket, useBasket } from "../hook/useBasket";
import { useBookingsCreate, useBookingFindByCode } from "../hook/useBooking";
import PaymentLayout from "../layout/PaymentLayout";
import { BookingsCreateInput, bookingsCreate_BookingsCreate_data } from "../types/api";
import { getFromUrl } from "../utils/url";



interface IcustomParams {
    bookingIds: string[],
}
interface IProp {
    context: IUseBasket;
}

export const Payment: React.FC<IProp> = ({ context }) => {
    const { items, totalPrice, updateComponent } = context;
    const urlBKcode = getFromUrl("code") || "";
    const [authData, setAuthData] = useState<IAuthInfo>();
    const [customParams, setCustomParams] = useState<IcustomParams>();
    const { booking } = useBookingFindByCode(urlBKcode);
    const { bookingsCreate } = useBookingsCreate();

    const openNCmodal = () => {
        window.jdPayStart();
    }

    const startPay = (datas: bookingsCreate_BookingsCreate_data[]) => {
        const bookingIds = datas.map(d => d._id);
        const customParams: IcustomParams = {
            bookingIds
        }
        setCustomParams(customParams);
        auth(totalPrice).then(() => {
            setTimeout(() => {
                openNCmodal();
            }, 1000)
        });
    }

    const handleBooking = (param: TPaySubmitInfo) => {
        const params: BookingsCreateInput[] = items.map(item => ({
            adultCount: item.count.adult,
            babyCount: item.count.baby,
            kidCount: item.count.kids,
            email: param.buyerInfo.phone,
            name: param.buyerInfo.name,
            phoneNumber: param.buyerInfo.phone,
            message: ""
        }))

        bookingsCreate({
            params,
            productIds: 
        }, startPay)
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
        {authData && <NiceElments ReqReserved={JSON.stringify(customParams || {})} {...getNiceElementForTest({
            EdiDate: authData.ediDate,
            MID: authData.mid,
            hex: authData.hashString,
            Amt: `${totalPrice}`
        })} />}
        <JDpaymentUI onDoPay={handleBooking} booking={booking} Preview={
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
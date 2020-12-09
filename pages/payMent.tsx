import { useState } from "react";
import { Basket } from "../components/basket/Basket";
import { getAuth } from "../components/nice/getAuth";
import NiceElments from "../components/nice/NiceElement";
import { getNiceElementForTest } from "../components/nice/niceUtils";
import { IAuthInfo } from "../components/nice/type";
import { JDpaymentUI, TPaySubmitInfo } from "../components/payment/JDpaymentUI";
import { IUseBasket, useBasket } from "../hook/useBasket";
import { useBookingFindByCode } from "../hook/useBooking";
import PaymentLayout from "../layout/PaymentLayout";
import { getFromUrl } from "../utils/url";

interface IProp {
    context: IUseBasket;
}

export const Payment: React.FC<IProp> = ({ context }) => {
    const { items, totalPrice, updateComponent } = context;
    const urlBKcode = getFromUrl("code") || "";
    const [authData, setAuthData] = useState<IAuthInfo>();
    const { booking } = useBookingFindByCode(urlBKcode);

    const openNCmodal = () => {
        window.jdPayStart();
    }

    const handlePay = (param: TPaySubmitInfo) => {
        auth(totalPrice).then(() => {
            setTimeout(() => {
                openNCmodal();
            }, 1000)
        });
    }

    const auth = async (price: number) => {
        const { data } = await getAuth(price);
        if (data.ediDate)
            setAuthData(data);
        else {
            throw Error("this asdasd")
        }
    }

    return <PaymentLayout>
        {authData && <NiceElments {...getNiceElementForTest({
            EdiDate: authData.ediDate,
            MID: authData.mid,
            hex: authData.hashString,
            Amt: totalPrice
        })} />}
        <JDpaymentUI onDoPay={handlePay} booking={booking} Preview={
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
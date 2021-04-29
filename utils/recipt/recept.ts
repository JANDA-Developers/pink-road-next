import CardRecipt, {
    IReciptProp,
} from "../../components/recipt/CreditCardReceipt";
import { openForPirntWithReactPortal, openForPrint } from "./openForPrint";

export const printRecipt = (props: IReciptProp) => {
    const markUp = CardRecipt({
        ...props,
    });

    openForPirntWithReactPortal(markUp);
};

import { useState } from "react"
import { Ivalue } from "../components/phoneNumberInput/PhoneNumberInput"

export const usePhoneInput = (defaultValue:string) => {
    const [value,setValue] = useState<Ivalue>({
        one: defaultValue.substr(0,3) || "",
        two: defaultValue.substr(3,4) || "",
        three: defaultValue.substr(7,4) || "",
    })

    return {value,setValue}
}
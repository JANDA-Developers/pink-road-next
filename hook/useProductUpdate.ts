import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_POST_UPDATE } from "apollo/mutations";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productUpdate, productUpdateVariables } from "../types/api";

export const useproductUpdate = (options?: MutationHookOptions<productUpdate,productUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_POST_UPDATE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST) || ""],
        ...options
    });
    
    const productUpdate = (variables: productUpdateVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {productUpdate, updateLoading}
}
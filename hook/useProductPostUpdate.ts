import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_POST_UPDATE } from "apollo/mutations";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productPostUpdate, productPostUpdateVariables } from "../types/api";

export const useProductPostUpdate = (options?: MutationHookOptions<productPostUpdate,productPostUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productPostUpdate, productPostUpdateVariables>(PRODUCT_POST_UPDATE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST) || ""],
        ...options
    });
    
    const productPostUpdate = (variables: productPostUpdateVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductPostUpdate.ok) {
                onSucess?.()
            }
        })
    }

    return {productPostUpdate, updateLoading}
}
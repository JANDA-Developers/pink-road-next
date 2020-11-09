import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_UPDATE } from "../apollo/mutations";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productPostUpdate, productPostUpdateVariables } from "../types/api";

export const useProductUpdate = (options?: MutationHookOptions<productPostUpdate,productPostUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productPostUpdate, productPostUpdateVariables>(PRODUCT_UPDATE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST) || ""],
        ...options
    });
    
    const productUpdate = (variables: productPostUpdateVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductPostUpdate.ok) {
                onSucess?.()
            }
        })
    }

    return {productUpdate, updateLoading}
}
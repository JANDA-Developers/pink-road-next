import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_UPDATE } from "../apollo/mutations";
import { PRODUCT_LIST } from "../apollo/queries";
import { productUpdate, productUpdateVariables } from "../types/api";

export const useProductUpdate = (options?: MutationHookOptions<productUpdate,productUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_UPDATE, {
        refetchQueries: [getOperationName(PRODUCT_LIST) || ""],
        ...options
    });
    
    const productUpdate = (variables: productUpdateVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductUpdate.ok) {
                onSucess?.()
            }
        })
    }

    return {productUpdate, updateLoading}
}
import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_POST_DELETE, PRODUCT_POST_UPDATE } from "apollo/mutations";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productDelete, productDeleteVariables } from "../types/api";

export const useproductDelete = (options?: MutationHookOptions<productDelete,productDeleteVariables>) => {
    const [productUpdateMu, { loading: deleteLoading }] = useMutation<productDelete, productDeleteVariables>(PRODUCT_POST_DELETE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST) || ""],
        ...options
    });
    
    const productDelete = (variables: productDeleteVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.productDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {productDelete, deleteLoading}
}
import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { PRODUCT_POST_DELETE, PRODUCT_POST_UPDATE } from "apollo/mutations";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productPostDelete, productPostDeleteVariables } from "../types/api";

export const useProductPostDelete = (options?: MutationHookOptions<productPostDelete,productPostDeleteVariables>) => {
    const [productUpdateMu, { loading: deleteLoading }] = useMutation<productPostDelete, productPostDeleteVariables>(PRODUCT_POST_DELETE, {
        refetchQueries: [getOperationName(PRODUCT_POST_LIST) || ""],
        ...options
    });
    
    const productPostDelete = (variables: productPostDeleteVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductPostDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {productPostDelete, deleteLoading}
}
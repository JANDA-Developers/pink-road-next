import { MutationHookOptions, useMutation } from "@apollo/client"
import { getOperationName } from "@apollo/client/utilities"
import { PCATEGORY_CREATAE } from "apollo/mutations"
import { PCAT_LIST } from "apollo/queries"
import { pcategoryCreate, pcategoryCreateVariables } from "types/api"

export const usePCategoryCreate = (options?: MutationHookOptions<pcategoryCreate, pcategoryCreateVariables>) => {
    const [categoryCreateMu, { loading }] = useMutation<pcategoryCreate, pcategoryCreateVariables>(PCATEGORY_CREATAE, {
        refetchQueries: [getOperationName(PCAT_LIST) || ""],
        ...options,
    })

    const catCreate = (label: string) => {
        categoryCreateMu({
            variables: {
                params: { label }
            }
        })
    }

    return { catCreate }
}


import { MutationHookOptions, useMutation } from "@apollo/client";
import { MULTI_UPLOAD} from "../apollo/mutations";
import { multiUpload, multiUploadVariables, multiUpload_MultiUpload_data} from "../types/api";

export const useUpload = (options?: MutationHookOptions<multiUpload, multiUploadVariables>) => {
    const [multMu, { loading: uploadLoading }] = useMutation<multiUpload, multiUploadVariables>(MULTI_UPLOAD, {
        ...options
    });

    const signleUpload = (file: FileList | null , onSucess?: (url:string,data:multiUpload_MultiUpload_data | undefined) => void) => {
        if(!file) return;
        multMu({
            variables: {
                file
            }
        }).then(({data})=> {
            const url = data?.MultiUpload.data[0]?.uri;
            if(url) {
                onSucess?.(url,data?.MultiUpload.data?.[0] || undefined)
            }
        })
    }

    return {signleUpload}
}











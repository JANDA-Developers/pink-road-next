import { MutationHookOptions, useMutation } from "@apollo/client";
import { MULTI_UPLOAD} from "../apollo/mutations";
import { multiUpload, multiUploadVariables, multiUpload_MultiUpload_data} from "../types/api";

export const useUpload = (options?: MutationHookOptions<multiUpload, multiUploadVariables>) => {
    const [multMu, { loading: uploadLoading }] = useMutation<multiUpload, multiUploadVariables>(MULTI_UPLOAD, {
        ...options
    });

    const signleUpload = (file: FileList | null , onSucess?: (url:string,data:Exclude<multiUpload_MultiUpload_data,"__typenmae"> | undefined) => void) => {
        if(!file) return;
        multMu({
            variables: {
                file
            }
        }).then(({data})=> {
            const file = data?.MultiUpload.data[0];
            const url = file?.uri;
            if(url) {
                delete file.__typename
                onSucess?.(url,file || undefined)
            }
        })
    }

    return {signleUpload}
}











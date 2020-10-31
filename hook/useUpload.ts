import { MutationHookOptions, useMutation } from "@apollo/client";
import { MULTI_UPLOAD} from "../apollo/mutations";
import { multiUpload, multiUploadVariables} from "../types/api";

export const useUpload = (options?: MutationHookOptions<multiUpload, multiUploadVariables>) => {
    const [multMu, { loading: uploadLoading }] = useMutation<multiUpload, multiUploadVariables>(MULTI_UPLOAD, {
        ...options
    });

    const signleUpload = (file: FileList | null , onSucess?: (url:string) => void) => {
        if(!file) return;
        multMu({
            variables: {
                file
            }
        }).then(({data})=> {
            const url = data?.MultiUpload.data[0]?.uri;
            if(url) {
                onSucess?.(url)
            }
        })
    }

    return {signleUpload}
}











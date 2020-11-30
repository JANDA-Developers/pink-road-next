
    export const tapCheck = (value:number, should:number) =>({
        style: {
            display: value === should ? undefined : "none"
        }
    })
    
    export const STYLE = {
        hide: {
            display: "none"
        },
        inlineblock: {
            display: "inline-block"
        }
    }
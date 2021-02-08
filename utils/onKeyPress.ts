export const onKeyPressEnter = (callBack:(e:React.KeyboardEvent<HTMLInputElement>)=> void) => 
(e:React.KeyboardEvent<HTMLInputElement>) =>  {
    if(e.key === "Enter"){
        e.preventDefault(); // Ensure it is only this code that runs
        callBack(e);
    }
}
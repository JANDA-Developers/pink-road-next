import { useContext, useState } from "react";
import { useSingleSmsSend } from "../../hook/useNotification"
import { AppContext } from "../../pages/_app";
import { Modal } from "../modal/Modal";


interface IProps {
    receivers: string[]
}
export const SmsSendModal: React.FC<IProps> = ({ receivers }) => {
    const [sendSms] = useSingleSmsSend();
    const { myProfile } = useContext(AppContext);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const send = () => {
        sendSms({
            variables: {
                input: {
                    content,
                    receivers,
                    sender: process.env.SMS_SENDER!,
                    title
                }
            }
        })
    }
    return <Modal id="SMSsendModal" title="메세지보내기">
        <input value={title} onChange={(e) => {
            const val = e.currentTarget.value;
            setTitle(val);
        }} />
        <textarea value={content} onChange={(e) => {
            const text = e.currentTarget.value;
            setContent(text);
        }} />
        <button onClick={send}>보내기</button>
    </Modal>
}
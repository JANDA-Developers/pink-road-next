import { IP } from "../../types/interface";

export const InfoText = ({ children, ...props }: IP) => {
    return (
        <p className={`info_txt ${props.className}`} {...props}>
            <i className="jandaicon-info2 mini" />
            {children}
        </p>
    );
};

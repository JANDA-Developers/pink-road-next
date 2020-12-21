import React from 'react'

interface IProps {
}

const PolicyPopup:React.FC<IProps> = () => {
    return (
        <>
            <div id="Popup01" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup01');
                    }}
                />
                </a>
                
            </div>
            {/* // Popup:이용약관 */}
            {/* Popup:개인정보 수집 및 이용 동의 */}
            <div id="Popup02" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup02');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>개인정보 수집 및 이용 동의</h4>
                
                </div>
            </div>
            {/* // Popup:개인정보 수집 및 이용 동의 */}
            {/* Popup:개인정보처리 위탁 */}
            <div id="Popup03" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup03');
                    }}
                />
                </a>
                <div className="policyA in_txt2">
                <h4></h4>
                <p></p>
                <table>
                    <colgroup>
                    <col style={{ width: "30%" }} />
                    <col />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>수탁업체</th>
                        <th>위탁업무내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>잔다</td>
                        <td>예약 및 예약관리와 정산을 위한 서비스 제공</td>
                    </tr>
                    </tbody>
                </table>
                <p />
                </div>
            </div>
            {/* // Popup:개인정보처리 위탁 */}
            {/* Popup:여행자약관 */}
            <div id="Popup04" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup04');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>여행자약관</h4>
                <p>
                    여행자약관여행자약관여행자약관여행자약관여행자약관여행자약관여행자약관여행자약관
                </p>
                </div>
            </div>
            {/* // Popup:여행자약관 */}
            {/* Popup:개인정보 제3자 제공 */}
            <div id="Popup05" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup05');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>개인정보 제3자 제공</h4>
                <p>개인정보 제3자 제공</p>
                </div>
            </div>
            {/* // Popup:개인정보 제3자 제공 */}
            {/* Popup:마케팅정보 수신동의 */}
            <div id="Popup06" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup06');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>마케팅정보 수신동의</h4>
                <p>
                    마케팅정보 수신동의마케팅정보 수신동의마케팅정보 수신동의마케팅정보
                    수신동의마케팅정보 수신동의마케팅정보 수신동의마케팅정보 수신동의
                </p>
                </div>
            </div>
            {/* // Popup:마케팅정보 수신동의 */}
            {/* Popup:파트너약관 */}
            <div id="Popup07" className="popup_bg" style={{ display: "none" }}>
                <a className="close_icon">
                <i
                    className="flaticon-multiply"
                    onClick={()=>{
                        closePopup('Popup07');
                    }}
                />
                </a>
                <div className="policyA in_txt">
                <h4>파트너약관</h4>
                <p>파트너약관파트너약관파트너약관파트너약관파트너약관</p>
                </div>
            </div>
        </>
    )
}

export default PolicyPopup

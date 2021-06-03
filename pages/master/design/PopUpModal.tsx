// import { Modal2 } from "../../../components/modal/Modal";
// import { IUseModal } from "../../../hook/useModal";
// import { IPopupBox, IUsePopups } from "../../../hook/usePopups";
// import { toNumber } from "../../../utils/toNumber";

import { IPopupBox } from "../../../hook/usePopups";

export interface IPopUpModalHookInfo {
    popup: IPopupBox;
}

// export interface IProps extends IUseModal<IPopUpModalHookInfo> {
//     popupHook: IUsePopups;
// }

// const PopUpModal: React.FC<IProps> = ({ popupHook, ...modalHook }) => {
//     const modal = modalHook.info.popup;
//     return (
//         <Modal2 {...modalHook}>
//             <ul className="list__setting">
//                 <li className="con_toggle">
//                     <div className="content">
//                         <div className="line">
//                             <h6>팝업 타이틀</h6>
//                             <div className="txt">
//                                 <input
//                                     value={modal.title}
//                                     onChange={(e) => {
//                                         popupHook.

//                                     }}
//                                     type="text"
//                                     className="w100"
//                                     placeholder="title"
//                                 />
//                             </div>
//                         </div>
//                         <div className="line">
//                                 <h6>우선순위</h6>
//                                 <div className="txt">
//                                     <select
//                                     className="w50"
//                                         value={modal.priority}
//                                         onChange={(e) => {
//                                             const order = e.currentTarget.value;
//                                             modal.priority = toNumber(order);
//                                             popupHook.setPopups([
//                                                 ...popupHook.popups,
//                                             ]);
//                                         }}
//                                         className="w50"
//                                     >
//                                         <option value={0}>0</option>
//                                         <option value={1}>1</option>
//                                         <option value={2}>2</option>
//                                         <option value={3}>3</option>
//                                         <option value={4}>4</option>
//                                         <option value={5}>5</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>노출기간</h6>
//                             <div className="txt">
//                                 <div className="input_box mr5">
//                                     <input
//                                         readOnly
//                                         type="text"
//                                         className="day w100"
//                                     />
//                                     <CalendarIcon />
//                                 </div>
//                                 <span className="pc"> ~ </span>
//                                 <div className="input_box ml5">
//                                     <input
//                                         readOnly
//                                         type="text"
//                                         className="day w100"
//                                     />
//                                     <CalendarIcon />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>링크연결</h6>

//                             <div className="txt">
//                                 <input
//                                     type="text"
//                                     className="w100 mr5"
//                                     placeholder="https://"
//                                 />
//                                 <select className="w100">
//                                     <option value={LinkBehavior._blank}>
//                                         새창
//                                     </option>
//                                     <option value={LinkBehavior._self}>
//                                         현재창
//                                     </option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>좌표설정</h6>
//                             <p>모바일일떄는 가운데 정렬 됩니다.</p>
//                             <div className="txt">
//                                 <input
//                                     type="text"
//                                     className="w100 mr5"
//                                     placeholder="Left"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="w100"
//                                     placeholder="Top"
//                                 />
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>PC/Mobile</h6>
//                             <div className="txt">
//                                 <div className="switch">
//                                     모바일 사용
//                                     <input
//                                         className="tgl tgl-skewed"
//                                         type="checkbox"
//                                     />
//                                     <label
//                                         className="tgl-btn"
//                                         data-tg-off="OFF"
//                                         data-tg-on="ON"
//                                     />
//                                 </div>
//                                 <div className="switch">
//                                     PC사용
//                                     <input
//                                         className="tgl tgl-skewed"
//                                         type="checkbox"
//                                     />
//                                     <label
//                                         className="tgl-btn"
//                                         data-tg-off="OFF"
//                                         data-tg-on="ON"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>크기조절</h6>
//                             <p>최대 화면 크기를 초과할 수 없습니다.</p>
//                             <div className="txt">
//                                 <input
//                                     type="text"
//                                     className="w100 mr5"
//                                     placeholder="width"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="w100"
//                                     placeholder="height"
//                                 />
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>백그라운드 설정</h6>
//                             <div className="txt">
//                                 <div className="fileNameInputLabel"></div>
//                                 <input type="file" />
//                             </div>
//                         </div>
//                         <div className="line">
//                             <h6>컨텐츠 설정</h6>
//                             <div className="txt">
//                                 <div className="fileNameInputLabel"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//                 <li className="add_popup">
//                     <button
//                         onClick={handleAddPopUp}
//                         className="btn small pink_font mr10"
//                     >
//                         팝업 생성하기
//                     </button>
//                     <button className="btn small mr10">미리보기</button>
//                     <button className="btn small">삭제하기</button>
//                 </li>
//             </ul>
//         </Modal2>
//     );
// };

export default () => <span />;

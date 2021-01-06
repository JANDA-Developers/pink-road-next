import { MasterLayout } from 'layout/MasterLayout';
import React, { useState } from 'react';
import Link from "next/link";
import { useSmsTemplateCreate, useSmsTemplateDelete, useSmsTemplateUpdate, useTemplateList } from '../../../hook/useNotification';
import { FsmsTemplate } from '../../../types/api';
import { openModal } from '../../../utils/popUp';
import { SMSmodal } from '../../../components/sms/SMSmodal';

export const MsHomepageA: React.FC<IProp> = () => {
    const { items: templates } = useTemplateList()
    const [template, setTemplate] = useState<FsmsTemplate>();

    const handleOpenSmsModal = (template: FsmsTemplate) => () => {
        setTemplate(template);
        openModal("SMSmodal")();
    }

    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li className="on"><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage sms">
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option">
                                <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                <li><a href="/">예약<strong>23</strong></a></li>
                                <li><a href="/">회원<strong>23</strong></a></li>
                                <li><a href="/">정산<strong>23</strong></a></li>
                            </ul>
                        </div>
                        <div className="right_div">
                            <select className="sel01">
                                <option>최신순 &uarr;</option>
                                <option>최신순 &darr;</option>
                            </select>
                        </div>
                    </div>
                    <div className="sms-list">
                        <ul>
                            {templates.map(template =>
                                <li key={template._id} onClick={handleOpenSmsModal(template)}>
                                    <div className="title">
                                        <h5>{template.name}</h5>
                                        <div className="tag">
                                            <span className="ct">회원</span>
                                            {template.trigger?.[0] && <span className="auto">자동</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            {template.description}
                                        </p>
                                    </div>
                                    <div onClick={handleOpenSmsModal(template)} className="mouseover"><span><i className="jandaicon-setting"></i>수정</span></div>
                                </li>
                            )}
                            <li className="add" onClick={openModal("SMSmodal")}>
                                <button><i className="flaticon-add"></i>템플릿 생성</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* popup-SMS문자 템플릿 */}
            <SMSmodal key={template?._id} template={template} />
        </div>

    </MasterLayout >
};

export default MsHomepageA;
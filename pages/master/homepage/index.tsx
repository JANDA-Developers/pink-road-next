import { MasterLayout } from 'layout/MasterLayout';
import React, { useState } from 'react';
import Link from "next/link";
import { useSmsTemplateCreate, useSmsTemplateDelete, useSmsTemplateUpdate, useTemplateList } from '../../../hook/useNotification';
import { FsmsTemplate, _ITemplateSort } from '../../../types/api';
import { openModal } from '../../../utils/popUp';
import { SMSmodal, SMStemplateTagKr, TSMStemplateTag } from '../../../components/sms/SMSmodal';
import { ALLOW_ALLOW_SELLERS } from '../../../types/const';
import { auth } from '../../../utils/with';
import SortSelect from '../../../components/common/SortMethod';
import { SortSelecter } from '../../../components/common/SortSelect';
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';


export const MsHomepageA: React.FC = () => {
    const { items: templates, setSort, sort } = useTemplateList()
    const [template, setTemplate] = useState<FsmsTemplate>();

    const handleOpenSmsModal = (template: FsmsTemplate) => () => {
        setTemplate(template);
        openModal("#SMSmodal")();
    }

    const handleOpenCreateModal = () => () => {
        setTemplate(undefined)
        openModal("#SMSmodal")();
    }

    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage sms">
                    <div className="fin ifMobile">
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
                                <SortSelecter onChange={setSort} sort={sort}>
                                    <option value={_ITemplateSort.createdAt_desc}>최신순 &uarr;</option>
                                    <option value={_ITemplateSort.createdAt_asc}>최신순 &darr;</option>
                                </SortSelecter>
                            </div>
                        </div>
                    </div>
                    <div className="sms-list">
                        <ul>
                            {templates.map(template =>
                                <li key={template._id} onClick={handleOpenSmsModal(template)}>
                                    <div className="title">
                                        <h5>{template.name}</h5>
                                        <div className="tag">
                                            {template.tags[0] && <span className="ct">{SMStemplateTagKr[template.tags[0].value as TSMStemplateTag]}</span>}
                                            {template.triggers?.[0] && <span className="auto">자동</span>}
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
                            <li className="add" onClick={handleOpenCreateModal()}>
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

export default auth(ALLOW_ALLOW_SELLERS)(MsHomepageA);
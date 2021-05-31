import { MasterLayout } from "layout/MasterLayout";
import React, { useState } from "react";
import { HomepageTopNav } from "../../../components/topNav/MasterTopNav";
import { auth } from "../../../utils/with";
import { ALLOW_ADMINS } from "../../../types/const";
import { FkakaoTemplate, KakaoTemplateInspStatus } from "../../../types/api";
import { openModal } from "../../../utils/popUp";
import { KakaoModal } from "../../../components/sms/KakaoModal";
import {
    useKakaoTemplateCofirm,
    useKakaoTemplateList,
    useKakaoTemplateSync,
} from "../../../hook/useKakao";
import { kakaoInspStatusKr, kakaoStatusKr } from "../../../utils/enumToKr";
import { InfoText } from "../../../components/infoText/InfoText";

export const Kakao: React.FC = () => {
    const [syncContent] = useKakaoTemplateSync();
    const { data: templates } = useKakaoTemplateList();
    const [confirm] = useKakaoTemplateCofirm({
        onCompleted: ({ KakaoTemplateRequest }) => {
            if (KakaoTemplateRequest.ok) {
                alert("검수요청 완료");
            } else {
                alert(KakaoTemplateRequest?.error?.message);
            }
        },
    });
    const [template, setTemplate] = useState<FkakaoTemplate>();

    const handleOpenSmsModal = (template: FkakaoTemplate) => () => {
        setTemplate(template);
        openModal("#SMSmodal")();
    };

    const handleOpenCreateModal = () => () => {
        setTemplate(undefined);
        openModal("#SMSmodal")();
    };

    const handleConfirm = (template: FkakaoTemplate) => () => {
        confirm({
            variables: {
                templtCode: template.templtCode,
            },
        });
    };

    return (
        <MasterLayout>
            <div className="in ">
                <h4>홈페이지 설정</h4>
                <div className="in_content">
                    <HomepageTopNav />
                    <div className="con homepage sms">
                        <InfoText>
                            작성된 템플릿은 다음-카카오측의 4-5일간의 검수후
                            결과에 따라 거부되어 재작성 요청이 발생할 수
                            있습니다.
                        </InfoText>
                        <InfoText>
                            작성 또는 반려된 템플릿을 수정하는 기능이며,
                            템플릿상태가 대기 이고 템플릿 검수상태가 등록 또는
                            반려인 경우에만 수정 가능합니다.
                        </InfoText>
                        <InfoText>
                            승인이 이루어지지 않은 템플릿에 대하여 삭제요청
                            합니다. 삭제는 즉시 이루어 지나 이미 승인이 완료된
                            템플릿은 삭제불가 합니다.
                        </InfoText>
                        <InfoText>
                            카카오 또는 알리고에 직접 수정을 만든경우에 싱크
                            버튼을 통해 화면싱크를 맞추어 주십시요. 서비스가
                            문자 내용을 치환하기 위해서는 양쪽싱크가
                            일치해야합니다.
                        </InfoText>
                        <div className="fin ifMobile">
                            <button
                                onClick={() => {
                                    syncContent();
                                }}
                                className="btn small"
                            >
                                싱크⟳
                            </button>
                        </div>
                        <div className="sms-list">
                            <ul>
                                {templates?.map((template) => (
                                    <li key={template?.templtCode}>
                                        <div className="title">
                                            <h5>{template.templtName}</h5>
                                        </div>
                                        <div>
                                            <p>
                                                <div>
                                                    <b>요청상태 - </b>
                                                    <span>
                                                        {
                                                            kakaoInspStatusKr[
                                                                template
                                                                    .inspStatus
                                                            ]
                                                        }
                                                    </span>
                                                </div>
                                                <div>
                                                    <b>상태 - </b>
                                                    <span>
                                                        {
                                                            kakaoStatusKr[
                                                                template.status
                                                            ]
                                                        }
                                                    </span>
                                                </div>
                                                <div>
                                                    {template.templtContent}
                                                </div>
                                                {template.inspStatus ===
                                                    KakaoTemplateInspStatus.REG && (
                                                    <button
                                                        className="btn small mr10"
                                                        onClick={handleConfirm(
                                                            template
                                                        )}
                                                    >
                                                        심사요청
                                                    </button>
                                                )}
                                                <button
                                                    className="btn small"
                                                    onClick={handleOpenSmsModal(
                                                        template
                                                    )}
                                                >
                                                    수정하기
                                                </button>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                                <li
                                    className="add"
                                    onClick={handleOpenCreateModal()}
                                >
                                    <button>
                                        <i className="flaticon-add"></i>템플릿
                                        생성
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <KakaoModal
                    key={template?.templtCode || "CreateTemplateModal"}
                    template={template}
                />
            </div>
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(Kakao);

import React, { useState } from 'react';
import defaultPageInfo from 'info/anonyFindBook.json';
import { useRouter } from 'next/router';
import { usePageEdit } from '../../hook/usePageEdit';
import { PageEditor } from '../../components/common/PageEditer';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { useBookingFindByInfo } from '../../hook/useBooking';
import { useVerification } from '../../hook/useVerification';
import { VerifiEamilModal } from '../../components/verifiModal/VerifiEmailModal';
import { closeModal, openModal } from '../../utils/popUp';
import { VERIFICATION_COMPLETE } from '../../apollo/gql/user';
import { VerificationTarget } from '../../types/api';
import { autoComma, autoHypenPhone } from '../../utils/formatter';

export const Main: React.FC<Ipage> = (pageInfo) => {
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);

    const verifiHook = useVerification();

    const [info, setInfo] = useState({
        name: "",
        phoneNumber: ""
    })
    const router = useRouter()
    const { getData, data } = useBookingFindByInfo({
        fetchPolicy: "network-only",
        variables: {
            name: info.name,
            phoneNumber: info.phoneNumber,
            verificationId: verifiHook.verifiData?._id || "",
        }
    })

    const handleSearch = () => {
        if (!verifiHook.verifiData?._id) {
            alert("본인인증을 진행 해주새요.")
        }
        alert("getData occured");
        getData();
    }

    const toProductBoard = (id: string) => {
        router.push(id);
    }

    return <div className="body main" id="main" >
        <PageEditor pageTools={pageTools} />
        <div>
            {/* 성함 */}
            <input placeholder="성함입력" onChange={(e) => {
                const val = e.currentTarget.value;
                info.name = val;
                setInfo({
                    ...info
                })
            }} value={info.name} />
            {/* 번호 */}
            <input
                readOnly={verifiHook.verifiData?.isVerified}
                placeholder="전화번호입력" onChange={(e) => {
                    const val = e.currentTarget.value;
                    info.phoneNumber = val;
                    setInfo({
                        ...info
                    })
                }}
                value={autoHypenPhone(info.phoneNumber)}
            />
            <button onClick={() => {
                openModal("#PhoneVerifi")();
            }}>인증하기</button>
            <button disabled={!verifiHook.verifiData?.isVerified} onClick={handleSearch}>검색하기</button>
        </div>
        {/* 결과 */}
        {data?.map(data =>
            <div key={data._id} >
                {data.name}
            </div>
        )}
        <VerifiEamilModal id="PhoneVerifi" key={info.phoneNumber} defaultPayload={info.phoneNumber} target={VerificationTarget.PHONE} onSuccess={() => {
            closeModal("#PhoneVerifi")();
        }} verifiHook={verifiHook} />
    </div >
};

export const getStaticProps = getStaticPageInfo("anonymouseFindBook");
export default Main;

import { MasterLayout } from 'layout/MasterLayout';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { check, HomepageTopNav } from '../../../components/topNav/MasterTopNav';
import { useFeePolicy, useFeePolicyUpdate } from '../../../hook/useFeePolicy';
import { AddtionalFeesStatus, AddtionalFeesUpdateInput, FeePolicyStatus, FeePolicyUpdateInput, TargetStatus } from '../../../types/api';
import { omits } from '../../../utils/omit';
import { AdditionFeePolicyBlock } from '../../../components/feePolicyBlock/AdditionFeePolicyBlock';
import { cloneObject } from '../../../utils/clone';
import { ALLOW_ADMINS } from '../../../types/const';
import { auth } from '../../../utils/with';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

interface IProp { }

export const checkOn = (key: string, exact?: boolean) => check(key, exact) ? "on" : ""
export const MsHomepageA: React.FC<IProp> = () => {
    const { data: defaultFeePolicy } = useFeePolicy();
    const [updatePolicy] = useFeePolicyUpdate({
        onCompleted: ({ FeePolicyUpdate }) => {
            if (FeePolicyUpdate.ok) {
                alert("수수료 변경이 완료되었습니다.");
            } else {
                alert("변경에 실패 했습니다. (잔다측 문의 주십시요)")
            }
        }
    });
    const [feePolicy, setFeePolicy] = useState<null | FeePolicyUpdateInput>(null);

    useEffect(() => {
        if (defaultFeePolicy)
            setFeePolicy({
                ...cloneObject(defaultFeePolicy)
            });
    }, [defaultFeePolicy])

    const handleSave = () => {
        const nextFeePolicy = omits(feePolicy, ["status" as any])
        updatePolicy({
            variables: {
                params: {
                    ...nextFeePolicy
                }
            }
        })
    }

    const { addtionalFees = [] } = feePolicy || {}

    const handleAddtionFeeChange = (addtionFee: AddtionalFeesUpdateInput, index: number) => <_, T extends keyof AddtionalFeesUpdateInput>(value: AddtionalFeesUpdateInput[T], key: T) => {
        if (!feePolicy) throw Error
        addtionFee[key] = value;

        if (key === "feePercent") {
            addtionFee.fee = 0;
        }

        if (key === "fee") {
            addtionFee.feePercent = 0;
        }
        if ((key === "fee" || key === "feePercent") && !value) {
            // @ts-ignore
            addtionFee[key] = 0;
        }
        // @ts-ignore
        feePolicy.addtionalFees[index] = { ...addtionFee }
        setFeePolicy({ ...feePolicy });
    }

    const handleAddPolicy = (target: TargetStatus) => () => {
        if (!feePolicy) throw Error
        const defaultPolicy = { feeName: "", target, type: AddtionalFeesStatus.DEFAULT, fee: 0, feePercent: 0 };
        feePolicy.addtionalFees = [...(feePolicy.addtionalFees || []), defaultPolicy]
        setFeePolicy({
            ...feePolicy
        })
    }

    const handleDelete = (index: number) => () => {
        if (!feePolicy) throw Error
        // @ts-ignore
        feePolicy.addtionalFees.splice(index, 1);
        setFeePolicy({
            ...feePolicy
        })
    }



    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage terms">

                    <div className="design_table">

                        <Tabs>
                            <div className="fin ifMobile">
                                <div className="float_left">
                                    <TabList>
                                        <Tab className="on">기업파트너</Tab>
                                        <Tab className="">개인파트너</Tab>
                                    </TabList>
                                </div>
                                <div className="float_right">
                                    <button onClick={handleSave} type="submit" className="btn medium">저장하기</button>
                                </div>
                            </div>

                            <TabPanel>
                                <div className="block_box">
                                    <h5>기업파트너 - 수수료항목<button onClick={handleAddPolicy(TargetStatus.BUSINESS)} className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                                    {(addtionalFees || []).map((bpp, index) => {
                                        if (bpp.target !== TargetStatus.BUSINESS) return null;
                                        return <AdditionFeePolicyBlock onDelete={handleDelete(index)} addtionPolicy={bpp} onChange={handleAddtionFeeChange(bpp, index)} key={"businessFeePolicy" + index} />
                                    })}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="block_box">
                                    <h5>개인파트너 - 수수료항목<button onClick={handleAddPolicy(TargetStatus.PERSONAL)} className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                                    {(addtionalFees || []).map((bpp, index) => {
                                        if (bpp.target !== TargetStatus.PERSONAL) return null;
                                        return <AdditionFeePolicyBlock onDelete={handleDelete(index)} addtionPolicy={bpp} onChange={handleAddtionFeeChange(bpp, index)} key={"indiPartner" + index} />
                                    })}
                                </div>
                            </TabPanel>
                        </Tabs>
                        {/* 
                        <div className="block_box">
                            <h5>기업파트너 - 수수료항목<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">추가항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 추가할 금액입니다. 시스템상에서는 +로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block_box">
                            <h5>개인파트너 - 수수료항목<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">추가항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 추가할 금액입니다. 시스템상에서는 +로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>

            </div>
        </div>

    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsHomepageA);
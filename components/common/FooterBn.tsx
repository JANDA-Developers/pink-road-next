
import React, { useState, useContext, useEffect } from 'react';
import pageInfoDefault from 'info/FooterBn.json';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from 'pages/_app';

import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import { IuseProductList, useProductList } from 'hook/useProduct';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { usePageInfo } from 'hook/usePageInfo';

interface IProps {
    context: IMainWrapContext
}

export const FooterBn: React.FC<IProps> = ({ context }) => {
    console.log("AWESOME")
    const { items, sitePageInfo } = context;
    const { editMode } = useContext(AppContext);
    const original = sitePageInfo || pageInfoDefault;
    const [page, setPage] = useState(original);
    const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPage)
    const [model, setModel] = useState();
    const router = useRouter()
    return <div>
        <div className="box01">
            <div className="w1200">
                <span className="sidetxt" {...edit("m_07_box01_subtitle")} />
                <h2 {...edit("m_07_box01_title")} />
                <div className="link"><a href="/member/join" {...edit("m_07_box01_link")}></a></div>
            </div>
            <div className="ovj" {...edit("m_07_box01_ovj")} />
        </div>
        <div className="box02">
            <div className="left">
                <h3 {...edit("m_07_box02_title")} />
                <p {...edit("m_07_box02_text")} />
            </div>
            <div className="right" style={{ ...bg("m_07_box02_rigthbg") }}>
                <Upload onUpload={imgEdit("m_07_box02_rigthbg")} />
                <div className="txt">
                    <strong {...edit("m_07_box02_rigthnumber")} />
                    <p {...edit("m_07_box02_rigthtitle")} />
                </div>
            </div>
        </div>
        <div className="box03">
            <div className="left" style={{ ...bg("m_07_box03_rigthbg") }}>
                <Upload onUpload={imgEdit("m_07_box03_rigthbg")} />
                <div className="txt">
                    <strong {...edit("m_07_box03_rigthnumber")} />
                    <p {...edit("m_07_box03_rigthtitle")} />
                </div>
            </div>
            <div className="right">
                <h3 {...edit("m_07_box03_title")} />
                <p {...edit("m_07_box03_text")} />
            </div>
        </div>
    </div>;
};




// 에러남 안됨 ㅠㅠㅠ









interface IGetProps {
    sitePageInfo: typeof pageInfoDefault | "",
}
export const getStaticProps: GetStaticProps<IGetProps> = async (context) => {
    const { data } = await usePageInfo("main");
    return {
        props: {
            sitePageInfo: data?.value || "",
            revalidate: 10
        }, // will be passed to the page component as props
    }
}

interface IMainWrapContext extends IuseProductList, IGetProps {
}

const MainWrap: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ sitePageInfo }) => {
    const productList = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
    const context: IMainWrapContext = {
        ...productList,
        sitePageInfo
    }

    return <FooterBn context={context} />

}
export default MainWrap;
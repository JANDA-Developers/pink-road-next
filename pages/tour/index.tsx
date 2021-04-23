import { Meta } from "components/common/meta/Meta";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import React, { useContext } from "react";
import { InferGetStaticPropsType } from "next";
import { AppContext } from "../_app";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import { checkIsExp } from "../../utils/product";
import { TourMainBoard } from "../../components/tour/TourMainBoard";
import pageInfoDefault from "info/tourMain.json";
import { usePageEdit } from "../../hook/usePageEdit";
import { useHomepage } from "../../hook/useHomepage";
import { useGroupList } from "../../hook/useGroup";
import isEmpty from "../../utils/isEmpty";
import { PageEditor } from "../../components/common/PageEditer";

interface IProp extends InferGetStaticPropsType<typeof getStaticProps> {}

export const getStaticProps = getStaticPageInfo("tourMain");
export const TourMain: React.FC<Ipage> = (pageInfo) => {
  const isExp = checkIsExp();
  const { data: groups = [] } = useGroupList();
  const { data } = useHomepage();
  const pageTools = usePageEdit(pageInfo, pageInfoDefault);
  const { categoriesMap } = useContext(AppContext);
  const cats = isExp
    ? categoriesMap?.EXPERIENCE || []
    : categoriesMap?.TOUR || [];

  const subTopInfo = {
    imgKey: isExp ? "exp_subTop_img" : "subTop_img",
    titleKey: isExp ? "exp_subTop_title" : "subTop_title",
    descKey: isExp ? "exp_subTop_desc" : "subTop_desc",
  };

  if (!data) return null;
  const { bannerA, bannerB } = data;
  return (
    <div>
      <Meta />
      <SubTopNav {...subTopInfo} pageTools={pageTools}>
        <li className="homedeps1">
          {isExp ? (
            <Link href="/tour?exp=true">
              <a>Experience</a>
            </Link>
          ) : (
            <Link href="/tour">
              <a>Tour</a>
            </Link>
          )}
        </li>
      </SubTopNav>
      <PageEditor pageTools={pageTools} />
      <div className="goods_box">
        <div className="w1200">
          <div className="banner bn_box line2">
            {bannerA.use && bannerA.img?.uri && (
              <a
                className="banner__box"
                target={bannerA.target}
                href={bannerA.link || undefined}
              >
                <img src={bannerA?.img.uri} alt={bannerA.img.name} />
              </a>
            )}
            {bannerB.use && bannerB && (
              <a
                className="banner__box"
                target={bannerB.target}
                href={bannerB.link || undefined}
              >
                <img src={bannerB?.img?.uri} alt={bannerB.img?.name} />
              </a>
            )}
          </div>
          {groups
            .filter(
              (group) =>
                !isEmpty(group.members) &&
                !!cats.find((cat) => cat.label === group.label)
            )
            .map((group) => (
              <TourMainBoard
                group={group}
                key={group._id}
                cat={cats.find((cat) => cat.label === group.label)!}
              />
            ))}
          <div className="fin mt30">
            {!isExp && (
              <Link href="/tour/list">
                <a className="btn full mt30">
                  투어상품 더보기<i className="jandaicon-arr4-bottom"></i>
                </a>
              </Link>
            )}
            {isExp && (
              <Link href="/tour/list?exp=true">
                <a className="btn full mt30">
                  체험상품 더보기<i className="jandaicon-arr4-bottom"></i>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourMain;

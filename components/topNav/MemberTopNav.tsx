import { checkOn } from "./MasterTopNav";

export const MemberTopNav = () => <ul className="memberTopNav subtop_nav">
    <li className={checkOn("announce")}><a href="/member/announce">공지사항</a></li>
    <li className={checkOn("qna")}><a href="/member/qna">자주하는 질문</a></li>
    <li className={checkOn("question")}><a href="/member/question">고객문의</a></li>
</ul>
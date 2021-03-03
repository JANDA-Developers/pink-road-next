export enum JDinputType {
    warning = 'warning',
    notice = 'notice',
    text = "text",
    map = "map",
    line = "line",
    switch = "switch",
    colour = 'colour',
    listLine = 'listLine',
    img = "img",
    timespace = "timespace",
    channelTak = "channelTalk",
    share = "share",
    api = "api",
    editor = "editor",
    link = "link",
    array = "array",
    tag = "tag"
}


export const SHARED_INFO = {
    shareLabel: {
        description: "공유하기 라벨",
        kr: "공유하기",
        GB: "SNS share"
    },
    langLabel: {
        description: "언어변경 텍스트",
        kr: "Language",
        GB: "Language"
    },
    link_twitter: {
        value: ""
    },
    link_facebook: {
        value: ""
    },
    link_insta: {
        value: ""
    },
    link_email: {
        value: ""
    },
    channelTalkLabel: {
        description: "채널톡 버튼 라벨",
        kr: "채널톡",
        GB: "Open Channel Talk "
    },
    twitter: {
        kr: "https://facebook.com",
        GB: "https://facebook.com"
    },
    facebook: {
        kr: "https://facebook.com",
        GB: "https://facebook.com"
    },
    instaGram: {
        kr: "https://facebook.com",
        GB: "https://facebook.com"
    },
    email: {
        kr: "janda@stayjanda.com",
        GB: "janda@stayjanda.com"
    },
    goto: {
        kr: "바로가기",
        GB: "go to",
    },
    currency_kr: {
        kr: "원",
        GB: "krW"
    },
    get: function(key: string, lang:string, index?:number):any {

        if(index !== undefined) {
            // @ts-ignore
            if(this[key].value) {
                // @ts-ignore
                return this[key].value[index]
            } else {
                // @ts-ignore
                return this[key][lang][index];
            }            
        }

        // @ts-ignore
        if(this[key].value) {
            // @ts-ignore
            return this[key].value
        } else {
            // @ts-ignore
            return this[key][lang];
        }
    },
    set: function(key:string,lang:string,value:any, index?:number):any {

        if(index !== undefined) {
            // @ts-ignore
            if(this[key].value !== undefined) {
                // @ts-ignore
                this[key].value[index] = value
            } else {
                // @ts-ignore
                return this[key][lang][index] = value;
            }            
        }
        
 
        if(index === undefined) { 
            // @ts-ignore
            if(this[key].value !== undefined) {
                // @ts-ignore
                this[key].value = value
            } else {
                // @ts-ignore
                this[key][lang] = value;
            }
        }
    }
}

export const ITS_GUIDE_INFO =  {
    ...SHARED_INFO,
    itsGuideEmail: {
        description: "잇츠가이드 연동 이메일",
        value: ""
    },
    tags: {
        description: "태그",
        type: JDinputType.tag,
        kr: ["부산가이드","여성가이드","뚜벅이여행","꽃놀이","버스투어","운전가능","일본어","영어","중국어"],
        GB: ["BusanGuid","WomanGuid","WalkTravel","Flower","Bus","DrivingAble","Japaneses","Chinese"]
    },
    topBg: {
        description: "최상단 이미지",
        type: JDinputType.img, 
        kr: "별나라호텔",
        GB: "Star Hotel"
    },
    channelTalk: {
        description: "채널톡",
        type: JDinputType.channelTak,
        publickKey: ""
    },
    channelTalkLabel: {
        kr: "채널톡 문의하기",
        GB: "Open Channel Talk "
    },
    share: {
        type: JDinputType.share,
    },
    shareLabel: {
        type: JDinputType.share,
        kr: "공유하기",
        GB: "SNS share"
    },
    langLabel: {
        kr: "Language",
        GB: "Language"
    },
    contentTitle: {
        description: "소개글 라벨",
        kr: "소개글",
        GB: "slef introduce"
    },
    content: {
        description: "소개글 내용",
        type: JDinputType.editor,
        kr: `1990년 관광통역가이드 취득 15년 패키지 여행안내후 프리랜서로 독립 , 한국인의 일본여행 인솔로 일본 오키나와~홋카이도까지 인솔겸 가이드,로 활동, 이후 여행사를 오픈하여 부산과 서울등 대도시에서 출발 지방으로가서 여러가지 체험과 숨겨진 관광지를 직접 기획하고 안내하는 오더메이드형 기획여행, 건강여행을 리드하고 있습니다.
        <br /> <br />
             현재까지 일본인가이드로써 서울을 비롯 제주도까지가이드 . 한국인인솔자로써 일본방문 100회이상. 일본 지상파TV TBS한국특집 한국총괄코디네이트(요리방송. 한옥 과 한방체험. 피부과 찰영등) 교류회매칭. 유네스코지정 사찰등 불교관련 답사 및 순례. .JATA박람회부스운영. 한국산후조리원 일본소개 및 제휴. 등 다양한활동
        <br /> <br />
                 유명한 관광지도 좋지만 소모성으로 피곤한 여행이 아닌, 나자신이 즐거운, 생활에 재충전이 되는 여행을 체험과 함께 즐기며 가이드하고 싶습니다.
        <br /> <br />
                     저와 함께 하시면 웰니스(Wellness)투어 즉 명상. 템플스테이. 아름다운경치를 바라보며 산책. 요트. 한방의 정보와 건강한 맛집탐방으로 편안하고 즐거운 체험으로 힐링 하실수 있을것입니다.`,
        GB: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
    },
    title_guid: {
        kr: "가이드 정보",
        GB: "Guid Info"
    },
    guid_info1_label: {
        // 편집불가 
        kr: "총 가이드",
        GB: "total Guid Count"
    },
    guid_info2_label: {
        // 편집불가 
        kr: "총 가이드인원",
        GB: "Guided customer count"
    },
    guid_info3_label: {
        // 편집불가 
        kr: "가이드 리뷰",
        GB: "Guid Review"
    },
    guid_info4_label: {
        // 편집불가 
        kr: "가이드 상품",
        GB: "Guid Product"
    },
    profile: {
        description: "프로필 이미지",
        type: JDinputType.img,
        kr: "/template/profile/img/man01.jpg",
        GB: "/template/profile/img/man01.jpg"
    },
    portfolio_label: {
        // 편집불가 
        kr: "가이드 상품목록",
        GB: "Guid Product"
    },
    productView:  {
        kr: "등록된 상품",
        GB: "Product"
    },
    noReviewData: {
        kr: "아직 리뷰한 상품이 없습니다.",
        GB: "No Review Product yet",
    },
    noProductData: {
        kr: "아직 등록한 상품이 없습니다.",
        GB: "No Regiseted Product yet",
    },
    guid_info1_value: {
        kr: "0",
        GB: "0"
    },
    guid_info2_value: {
        kr: "0",
        GB: "0"
    },
    guid_info3_value: {
        kr: "0",
        GB: "0"
    },
    guid_info4_value: {
        kr: "0",
        GB: "0"
    },
}

export default ITS_GUIDE_INFO
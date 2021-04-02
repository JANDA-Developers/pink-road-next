import { useState } from "react";
import { useEffect } from "react";
import { signInVariables, UserRole } from "../types/api";
import { initStorage, Storage } from "../utils/Storage";
import { Validater } from "../utils/validate";
import { isEmail } from "../utils/validation";

export const useSignIn = () => {
    const [saveId, setSaveId] = useState(false);
    const [saveSession, setSaveSession] = useState(false);
    const [userId, setId] = useState("");
    const [userPw, setPw] = useState("");
    const [userType, setUserType] = useState<UserRole>(Storage?.getLocal("lastLoginType", UserRole.individual) as UserRole || UserRole.individual)
    const { getData } = useLogin({
        onCompleted: ({ SignIn }) => {
            if (SignIn.ok) {
                if (saveId) {
                    localStorage.setItem("saveId", userId)
                }
                Storage?.saveLocal("lastLoginType", userType);
                Storage?.saveLocal("jwt", SignIn.data?.token || "");
                location.href = "/"
                alert("환영합니다.")
            } else {
                if (SignIn.error?.code === ERR_CODE.PASSWORD_NOT_EQUAL) {
                    alert("패스워드가 일치하지 않습니다.");
                }
                if (SignIn.error?.code === ERR_CODE.AUTHORIZATION) {
                    alert("해당 접근 권한이 없습니다.");
                }
                if (SignIn.error?.code === ERR_CODE.DOC_NOT_FOUND) {
                    alert("해당 이메일을 찾을 수 없습니다.");
                }
            }
        },
    })

    const router = useRouter();

    const sessionSave = () => {
        const answer = confirm('브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다.\n\n로그인 유지 기능을 사용할 경우 다음 접속부터는 로그인할 필요가 없습니다.\n\n단, 게임방, 학교 등 공공장소에서 이용 시 개인정보가 유출될 수 있으니 꼭 로그아웃을 해주세요.')
        if (!answer) return;
        setSaveSession(!saveSession);


        if (!saveSession) {
            localStorage.setItem("saveSession?", "Y")
        } else {
            localStorage.removeItem("saveSession?")
        }

    }

    const handleSaveId = () => {
        setSaveId(!saveId)
        if (!saveId) {
            localStorage.setItem("saveId?", "Y")
        } else {
            localStorage.removeItem("saveId?")
        }
    }

    // 로그인성공시
    // saveLocal("saveid", id);
    useEffect(() => {
        initStorage()
        setId(localStorage?.getItem("saveId") || "")
        setSaveId(!!Storage!.getLocal("saveId?", ""))
        setSaveSession(!!Storage!.getLocal("saveSession?", ""))
    }, [])

    const handleUserType = (type: UserRole) => {
        setUserType(type);
    }

    const handleId = (id: string) => {
        setId(id);
    }

    const handlePw = (pw: string) => {
        setPw(pw);
    }


    const { validate } = new Validater([{
        value: isEmail(userId),
        failMsg: "이메일을 입력 해주세요"
    }, {
        value: userPw.length > 4,
        failMsg: "패스워드를 입력 해주세요"
    }])

    const handleLogin = () => {
        if (!validate()) return;
        const signInvar: signInVariables = {
            email: userId,
            pw: userPw,
            hopeRole: userType,
            permanence: saveSession
        }



        getData({ variables: signInvar as any });
    }

}
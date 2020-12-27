
export interface KakaoError {
    error: string;
    error_description: string;
}
export interface LoginResponse {
    token_type: string;
    access_token: string;
    expires_in: string;
    refresh_token: string;
    refresh_token_expires_in: number;
    scope: string;
}
export interface LoginParams {
    throughTalk?: boolean;
    persistAccessToken?: boolean;
    scope?: string;
    success: (response: LoginResponse) => void;
    fail: (error: KakaoError) => void;
}
export declare type LogoutCallback = () => void;
export interface KakaoAuth {
    login: (params: LoginParams) => void;
    logout: (callback: LogoutCallback) => void;
    getAccessToken: () => string | null;
}
export interface Profile {
    nickname: string;
    profile_image: string;
    thumbnail_image_url: string;
    profile_needs_agreement?: boolean;
}
export interface KakaoAccount {
    profile: Profile;
    email: string;
    age_range: string;
    birthday: string;
    birthyear: string;
    gender: "femail" | "mail";
    phone_number: string;
    ci: string;
}
export interface UserProfile {
    id: number;
    kakao_account: KakaoAccount;
    synched_at: string;
    connected_at: string;
    properties: Profile;
}
export interface RequestParams {
    url: string;
    success: (profile: UserProfile) => void;
    fail: (error: KakaoError) => void;
}
export interface KakaoAPI {
    request: (params: RequestParams) => void;
}
export interface Kakao {
    init: (...args: any[]) => void;
    Auth: KakaoAuth;
    API: KakaoAPI;
}

export interface IKakaoResponse {
    response: LoginResponse;
    profile?: UserProfile;
}
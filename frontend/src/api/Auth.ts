import {AuthProvider} from "../enum";
import {baseClient} from "./index";
import {store} from "../storage/model";


interface AuthTokenResponse {
    access_token: string
}

export const getAuthUrl = async (provider: AuthProvider, redirectUri: String) => {
    return await baseClient.get(
        '/auth/url',
        {
            params: {
                'provider': provider,
                'redirect-uri': redirectUri
            }
        })
        .then(r => r.data as string)
}

export const auth = (code: string, redirectUri: String) => {
    baseClient.get(
        '/auth/token',
        {
            params: {
                'code': code,
                'redirect-uri': redirectUri
            }
        })
        .then(r => (r.data as AuthTokenResponse).access_token)
        .then(token => store.dispatch.auth.setToken(token))
}

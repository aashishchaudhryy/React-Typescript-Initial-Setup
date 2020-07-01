import axios from 'axios';

export async function onMe(accessToken: string) {
    return await axios.get(`Login/me?token=${accessToken}&isProduction=false`)
        .then((response) => {
            return response.data
        })
}

export async function onMain(accessToken: string) {
    return await axios.get(`Login/main?token=${accessToken}&isProduction=false`)
        .then((response) => {
            return response.data
        })
}
import axios from 'axios';

export async function login(data: any) {
    let res;
    try {
        res = await axios.post('Login', data)
        if (res) {
            axios.defaults.headers.common['Authorization'] = 'JWT ' + res.data.access;
            res = res.data
        }
    }
    catch (err) {
        console.log('error', err)
    }
    return res
}

export async function onMain(accessToken: string) {
    let res;
    try {
        res = await axios.get(`Login/main?token=${accessToken}&isProduction=false`)
        if (res) {
            res = res.data
        }
    }
    catch (err) {
        console.log('error', err)
    }
    return res
}
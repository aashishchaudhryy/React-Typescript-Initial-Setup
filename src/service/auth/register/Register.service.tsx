import axios from 'axios';

export async function register(data: any) {
    return await axios.post('Login/registration', data)
        .then((response) => {
            return response.data
        })
}
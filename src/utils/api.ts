import mock from '../utils/mock.json';

// const ApiUrlPath = 'https://bot.godssupport.com/Webapp';

// const request = (endpoint: string, options: any) => {
//     const url = `${ApiUrlPath}${endpoint}`;
//     return fetch(url, options).then(checkResponse);
// };
// const checkResponse = (res: Response) => {
//     return res.ok
//         ? res.json()
//         : res.json().then((err) => Promise.reject(err));
// };
export const fetchUserData = async () => {
    // export const fetchUserData = async (username?: string) => {
    // export const fetchUserData = async (username: string) => {
    // const endpoint = `/Public/Diploma?slug=${username}`;
    // const options = {
    //     method: "GET",
    //     headers: {
    //         // Authorization: localStorage.getItem('uuid')
    //     },
    // }
    // return request(endpoint, options);
    return mock
}
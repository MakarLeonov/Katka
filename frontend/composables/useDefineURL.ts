export const useDefineURL = () => {
    // const url = (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'http://katkamarket.com/api';
    
    // console.log('url: ', url);
    
    // return url
    // return (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'https://82.97.240.231/api';
    return (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'http://katkamarket.com:3000';
}
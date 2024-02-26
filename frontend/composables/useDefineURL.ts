export const useDefineURL = () => {
    // return (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'http://katkamarket.com:3000';
    return (process.env.NODE_ENV === 'development') ? 'http://katkamarket.com:3000' : 'http://katkamarket.com:3000';
}
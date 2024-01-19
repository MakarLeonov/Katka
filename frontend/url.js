const url = (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'https://api.katkamarket.com';

console.log('url: ', url);

export default url
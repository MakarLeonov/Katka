const url = (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'http://katkamarket.com:3000';
// const url = (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000' : 'http://82.97.240.231/api';

console.log('url: ', url);

export default url
import Commerce from '@chec/commerce.js';

//calling key from .env file
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
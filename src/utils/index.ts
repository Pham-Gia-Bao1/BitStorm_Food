// pre endpoint
export const API_URL : string = process.env.API_URL || 'http://localhost:8000/api';

export const TOKEN : string = process.env.TOKEN || 'token';

export function formatNumber(number : number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
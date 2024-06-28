import { Metadata } from "next";
export const API_URL: string = process.env.API_URL || 'http://localhost:8000/api';
export const TOKEN: string = process.env.TOKEN || 'token';
export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
export function generateMetadata(pageTitle: string, pageDescription: string): Metadata {
  return {
    title: {
      default: "BitStorm",
      template: "%s | BitStorm",
      absolute: `${pageTitle} | BitStorm` ,
    },
    description: pageDescription,
  };
}

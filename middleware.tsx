// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token');

//   const protectedRoutes = ['/settings', '/home']; // Danh sách các route cần bảo vệ

//   if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

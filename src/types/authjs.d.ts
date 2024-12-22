// import { type DefaultSession, User } from 'next-auth';
// import { JWT } from 'next-auth/jwt';

// declare module 'next-auth' {
//   interface Session {
//     user: DefaultSession['user'] & {
//       role: string;
//     };
//   }

//   interface User {
//     role: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     sub: string;
//     role: string;
//   }
// }

import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
    };
  }

  interface User {
    id: number;
    name: string;
    email: string;
  }
}

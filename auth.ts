import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    MicrosoftEntraID({
        clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
        clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
        issuer: `https://${process.env.AUTH_MICROSOFT_ENTRA_TENANT_ID}.ciamlogin.com/${process.env.AUTH_MICROSOFT_ENTRA_TENANT_ID}/v2.0`,
        authorization: { params: { scope: "openid profile email User.Read", prompt: "select_account" } },
    })
  ],
    callbacks: {
    async jwt({ token, account }) {
      // Attach access token to JWT
       console.log('token 1:', {token});
       console.log('account 1:', {account});
      if (account) {    
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
       console.log('token 2:', {token});
       console.log('session:', {session});

      //following isn't really ideal. I was expecting email to be present within session.user already!
       const decodedAccessToken: {oid: string ,email: string | undefined, unique_name: string} = jwtDecode(String(token.accessToken));
       console.log('decode', decodedAccessToken);
       
      session.user.email = decodedAccessToken?.email || decodedAccessToken?.unique_name;
      session.user.id = decodedAccessToken.oid

      //session.user.id = token.
      return session;
    },
  },
})

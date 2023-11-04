import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
              console.log("Profile Google: ", profile);
      
              let userRole = "Google User";
              return {
                ...profile,
                id: profile.sub,
                role: userRole,
              };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_Secret,
          }),
          
    ],
    callbacks: {
            async jwt({token, user}){
                if(user) token.role = user.role
            },
            async session({session, token}){
                if(session?.user) session.user.role = token.role;
                return token;
            },
    },
};
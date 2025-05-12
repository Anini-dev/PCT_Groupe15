import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// 👉 Déclare l'objet authOptions séparément
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        motDePasse: { label: "Mot de passe", type: "password" }
      },

      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:3000/api/utilisateurs/connexion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });
      
          // Si la réponse n'est pas OK, affiche le texte d'erreur
          if (!res.ok) {
            const errorText = await res.text();
            console.error("Réponse non-OK de l'API :", errorText);
            return null;
          }
      
          const user = await res.json();
      
          if (user && user.id) {
            return user;
          }
      
          return null;
        } catch (error) {
          console.error("Erreur dans authorize() :", error);
          return null;
        }
      }






    })
  ],
  pages: {
    signIn: '/'
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    }
  }
};

// 👇 Passe l'objet séparé à NextAuth
const handler = NextAuth(authOptions);

// 👇 Exporte les routes comme avant
export { handler as GET, handler as POST };

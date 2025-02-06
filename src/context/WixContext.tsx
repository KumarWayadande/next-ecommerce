import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookie from "js-cookie";

const refreshToken = JSON.parse(Cookie.get("refreshToken") || "{}");

const myWixClient = createClient({
  modules: {
    products,
    //   currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_WIX_PUBLIC_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

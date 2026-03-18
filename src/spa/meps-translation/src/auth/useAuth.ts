import { ref, onMounted } from "vue";
import { User } from "oidc-client-ts";
import { userManager } from "./authConfig";

const user = ref<User | null>(null);
const isLoading = ref(true);
const isAuthenticated = ref(false);
const error = ref<string | null>(null);

export function useAuth() {
  onMounted(async () => {
    try {
      // Handle callback
      if (window.location.pathname === "/callback") {
        const signedinUser = await userManager.signinRedirectCallback();
        user.value = signedinUser;
        isAuthenticated.value = true;
        window.history.replaceState({}, document.title, "/");
      } else {
        const existingUser = await userManager.getUser();
        if (existingUser && !existingUser.expired) {
          user.value = existingUser;
          isAuthenticated.value = true;
        }
      }
    } catch (err: any) {
      error.value = err.message || "Authentication failed";
    } finally {
      isLoading.value = false;
    }
  });

  const signIn = () => userManager.signinRedirect();
  const signOut = async () => {
    await userManager.removeUser();
    user.value = null;
    isAuthenticated.value = false;
  };

  return { user, isLoading, isAuthenticated, error, signIn, signOut };
}

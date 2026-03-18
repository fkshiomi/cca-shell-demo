import { createApp } from "vue";
import Root from "./shell/Root.vue";
import "./styles.css";

// Standalone bootstrap — wraps App in AuthGuard for standalone mode.
// When loaded as a plugin via Module Federation, mount.ts is used instead.
createApp(Root).mount("#app");

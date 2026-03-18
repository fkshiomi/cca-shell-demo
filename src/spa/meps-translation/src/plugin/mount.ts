import { createApp, App } from "vue";
import AppComponent from "../shell/App.vue";
import "../styles.css";

/**
 * Mount function exposed via Module Federation.
 * The React shell calls this to mount the Vue app into a DOM element.
 * Returns a cleanup function to unmount when navigating away.
 */
export function mount(el: HTMLElement): () => void {
  const app: App = createApp(AppComponent);
  app.mount(el);
  return () => app.unmount();
}

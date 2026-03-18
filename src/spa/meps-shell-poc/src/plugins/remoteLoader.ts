/**
 * Dynamic Module Federation loader.
 * Loads a remote entry script and resolves a module from it at runtime.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __webpack_init_sharing__: (scope: string) => Promise<void>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __webpack_share_scopes__: Record<string, any>;

const loadedScripts = new Set<string>();

function loadScript(url: string): Promise<void> {
  if (loadedScripts.has(url)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      loadedScripts.add(url);
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load remote: ${url}`));
    document.head.appendChild(script);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loadRemoteModule(scope: string, url: string, module: string): Promise<any> {
  await loadScript(url);
  await __webpack_init_sharing__("default");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container = (window as any)[scope];
  if (!container) throw new Error(`Remote container "${scope}" not found on window`);

  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  return factory();
}

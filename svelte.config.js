import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Explicitly use adapter-vercel instead of adapter-auto
    adapter: adapter({
      // Specify Node.js runtime version
      runtime: 'nodejs20.x'
    })
  }
};

export default config;
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 部署地址；使用自定义域名时把 site 改成你的域名并删掉 base 一行
  site: 'https://sweetenedsuzuka.github.io',
  base: '/suzuka-bakery',
  vite: {
    plugins: [tailwindcss()],
  },
});

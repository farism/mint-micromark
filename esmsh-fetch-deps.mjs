import fs from "fs";

const deps = [
  "micromark",
  "micromark-extension-directive",
  "micromark-extension-frontmatter",
  "micromark-extension-gfm",
  "micromark-extension-math",
  "micromark-extension-mdx",
];

const indexes = await Promise.all(
  deps.map((d) => fetch(`https://esm.sh/${d}?bundle&target=es2022`))
);

const indexContents = await Promise.all(indexes.map((i) => i.text()));

const bundles = await Promise.all(
  indexContents
    .map((contents) => contents.match(/"(.*)"/)[1])
    .map((url) => fetch(`https://esm.sh${url}`))
);

const bundleContents = await Promise.all(bundles.map((b) => b.text()));

bundleContents.forEach((b) => {
  const p = b.match(/esbuild bundle\((.*)\)/)[1];

  fs.writeFile(`./assets/${p}.js`, b, () => {});
});

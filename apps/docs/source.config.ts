import { remarkDocGen, fileGenerator } from "fumadocs-docgen";
import { defineConfig } from "fumadocs-mdx/config";
import { defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
	dir: "content/docs",
});

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [[remarkDocGen, { generators: [fileGenerator()] }]],
	},
});

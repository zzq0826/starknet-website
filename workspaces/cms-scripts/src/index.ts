import fs from "node:fs/promises";
import * as path from "node:path";

process.chdir(path.resolve(__dirname, "../../.."));

import { getFirst, write, yaml } from "./utils";
import { locales } from "@starknet-io/cms-data/src/i18n/config";
import { MainMenu } from "./main-menu";
import {
  getPages,
  getPosts,
  getSimpleData,
  getSimpleFiles,
  handleLink,
  updateBlocks,
} from "./data";
import { translateFile } from "./crowdin";

const simpleDataTypes = [
  await getSimpleData("categories"),
  await getSimpleData("events"),
  await getSimpleData("topics"),
];

for (const simpleData of simpleDataTypes) {
  try {
    await fs.mkdir(`_data/_dynamic/${simpleData.resourceName}`, {
      recursive: true,
    });

    for (const locale of locales) {
      const data = simpleData.filenames.map((filename) =>
        simpleData.filenameMap.get(`${locale}:${filename}`),
      );

      await write(
        `_data/_dynamic/${simpleData.resourceName}/${locale}.json`,
        data,
      );
    }
  } catch (err) {
    console.log("simpleData.resourceName", simpleData.resourceName);
    console.log(err);
  }
}

const simpleFiles = [
  await getSimpleFiles("dapps"),
  await getSimpleFiles("wallets"),
  await getSimpleFiles("block-explorers"),
  await getSimpleFiles("bridges"),
  await getSimpleFiles("fiat-on-ramps"),
  await getSimpleFiles("redirects"),
  await getSimpleFiles("alert"),
];

for (const simpleFile of simpleFiles) {
  try {
    await fs.mkdir(`_data/_dynamic/${simpleFile.resourceName}`, {
      recursive: true,
    });

    for (const locale of locales) {
      const data = simpleFile.localeMap.get(locale)!;

      await write(
        `_data/_dynamic/${simpleFile.resourceName}/${locale}.json`,
        data.items,
      );
    }
  } catch (err) {
    console.log("simpleFile.resourceName", simpleFile.resourceName);
    console.log(err);
  }
}

const posts = await getPosts();
const pages = await getPages();

updateBlocks(pages, posts);

for (const locale of locales) {
  await fs.mkdir(`_data/_dynamic/posts/${locale}`, { recursive: true });
}

for (const data of posts.filenameMap.values()) {
  await write(`_data/_dynamic/posts/${data.locale}/${data.slug}.json`, data);
}

for (const locale of locales) {
  await fs.mkdir(`_data/_dynamic/pages/${locale}`, { recursive: true });
}

for (const data of pages.filenameMap.values()) {
  await fs.mkdir(
    path.join(
      "_data/_dynamic/pages",
      data.locale,
      ...(data.breadcrumbs_data?.map((page) => page.slug) ?? []),
    ),
    { recursive: true },
  );

  await write(path.join("_data/_dynamic/pages", `${data.link}.json`), data);

  // TODO stop using this in favor of above
  await write(`_data/_dynamic/pages/${data.locale}/${data.slug}.json`, data);
}

// main menu
await fs.mkdir("_data/_dynamic/main-menu", { recursive: true });

for (const locale of locales) {
  const mainMenu: MainMenu = await translateFile(locale, "settings", 'main-menu.yml');

  for (const mainMenuItem of mainMenu.items) {
    for (const column of mainMenuItem.columns ?? []) {
      for (const block of column.blocks ?? []) {
        block.items = block.items?.map((item) =>
          handleLink(locale, item, pages, posts),
        );
      }
    }
  }

  await write(`_data/_dynamic/main-menu/${locale}.json`, mainMenu);
}
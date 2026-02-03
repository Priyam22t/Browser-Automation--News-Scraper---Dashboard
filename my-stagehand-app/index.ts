import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log("Opening Hacker News...");
  await page.goto("https://news.ycombinator.com", { waitUntil: "load" });

  console.log("Scraping headlines...");
  const headlines = await page.$$eval(".titleline > a", links =>
    links.map(link => ({
      title: link.textContent?.trim() || "",
      url: link.getAttribute("href") || "",
    }))
  );

  fs.writeFileSync("headlines.json", JSON.stringify(headlines, null, 2));

  console.log(`Saved ${headlines.length} headlines to headlines.json`);

  await browser.close();
  console.log("Done ✅");
}

main().catch(console.error);

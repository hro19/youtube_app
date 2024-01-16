import { test, expect } from '@playwright/test';

test("youtube_appのサイト訪問時のスクリーンショット", async ({ page }, test) => {
  await page.goto("https://youtube-app.pages.dev/");
  await page.screenshot({ path: "first.png" });
});

test("ユーザーログイン（aa）でしたときのスクリーンショット", async ({
  page,
}) => {
  // 1. サイトにアクセス
  await page.goto("https://youtube-app.pages.dev/");

  // 2. ユーザーネームを入力
  await page.fill('input[name="username"]', "aa");
  await page.click("id=user_login");

  // 3. 検索結果がDOMにレンダリングされるのを待つ
  await page.waitForSelector(".vm-wrapper", { state: "hidden" });

  // 4. 動画検索ボタンを押す（検索文字に入力されているものと仮定して）
  await page.click("id=youtube_search_bt");

  // 5. 検索結果がDOMにレンダリングされるのを待つ
  await page.waitForSelector("#results");

  // 6. 検索結果のスクリーンショットを保存
  await page.screenshot({ path: "search-results.png" });
});

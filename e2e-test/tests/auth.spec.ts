import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("should allow user to login", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByText("Login for existing account")).toBeVisible();

  await page.locator("[name=email]").fill("test_register_2672@test.com");
  await page.locator("[name=password]").fill("password");

  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page.getByText("Sign In Successful")).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${
    Math.floor(Math.random() * 9000) + 1000
  }@test.com`;

  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "I do not have an account" }).click();

  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("password");
  await page.locator("[name=confirmPassword]").fill("password");

  await page.getByRole("button", { name: "Sign Up" }).click();

  await expect(page.getByText("Registration successfully")).toBeVisible();
});

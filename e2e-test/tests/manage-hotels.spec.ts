import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByText("Login for existing account")).toBeVisible();

  await page.locator("[name=email]").fill("test_register_2672@test.com");
  await page.locator("[name=password]").fill("password");

  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page.getByText("Sign In Successful")).toBeVisible();
});

test("should allow user to add hotel", async ({ page }) => {
  await page.goto(`${UI_URL}add-hotel`);

  await page.locator("[name='name']").fill("Test Hotel");
  await page.locator("[name='city']").fill("Test Hotel City");
  await page.locator("[name='description']").fill("Test Hotel Description");
  await page.locator("[name='pricePerNight']").fill("250000");
  await page.selectOption("select[name='starRating']", "3");
  await page.getByText("Budget").click();

  await page.getByLabel("Free Wifi").check();
  await page.getByLabel("Parking").check();

  await page.locator('[name="adultCount"]').fill("2");
  await page.locator('[name="childCount"]').fill("4");

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files", "1.jpg"),
  ]);

  await page.getByRole("button", { name: "Save My Hotel" }).click();
  await expect(page.getByText("Hotel saved successful")).toBeVisible();
});

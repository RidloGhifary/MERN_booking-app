import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();

  // await expect(page.getByText("Login for existing account")).toBeVisible();

  await page.locator("[name=email]").fill("test_register_2672@test.com");
  await page.locator("[name=password]").fill("password");

  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page.getByText("Sign In Successful")).toBeVisible();
});

test("should allow user to add hotel", async ({ page }) => {
  const testHotel = `Test_hotel_${
    Math.floor(Math.random() * 9000) + 1000
  }Hotel`;

  await page.goto(`${UI_URL}add-hotel`);

  await page.locator("[name='name']").fill(`${testHotel}`);
  await page.locator("[name='city']").fill(`${testHotel} City`);
  await page.locator("[name='description']").fill(`${testHotel} Description`);
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

test("should display list of hotels", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await expect(page.getByText("Test Hotel").first()).toBeVisible();
  await expect(page.getByText("Test Hotel City").first()).toBeVisible();
  await expect(page.getByText("Test Hotel Description").first()).toBeVisible();
  await expect(page.getByText("Budget").first()).toBeVisible();
  await expect(page.getByText("per night").first()).toBeVisible();
  await expect(page.getByText("2 adults, 4 children").first()).toBeVisible();
  await expect(page.getByText("3 Star Rating").first()).toBeVisible();

  await expect(
    page.getByRole("link", { name: "View Details" }).first()
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Add hotel" })).toBeVisible();
});

test("should edit hotel", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await page.getByRole("link", { name: "View Details" }).nth(3).click();

  await page.waitForSelector('[name="name"]', { state: "attached" });
  await expect(page.locator('[name="name"]')).toHaveValue(
    "Test Hotel Updated Again"
  );
  await page.locator('[name="name"]').fill("Test Hotel Udalah");
  await page.getByRole("button", { name: "Save My Hotel" }).click();

  await expect(page.getByText("Successful updating hotel")).toBeVisible();

  await page.reload();

  await expect(page.locator('[name="name"]')).toHaveValue("Test Hotel Udalah");
});

import { test, expect } from "@playwright/test";

test.describe("CodeNap Café Forms E2E Validation and Submission tests", () => {
  test.beforeEach(async ({ page }) => {
    // Mock the backend API routes to prevent spamming actual emails during E2E tests
    await page.route("**/api/**", async (route) => {
      const json = {
        success: true,
        message: "✅ Mocked successful submission! Coffee is brewing! ☕",
      };
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        json,
      });
    });
  });

  test("1. Newsletter Subscription Form - Validates & Submits successfully", async ({ page }) => {
    await page.goto("/");

    // Locate newsletter subscribe input and actual submit button (not the motion wrapper)
    const emailInput = page.locator("#Subscribe_email");
    const subscribeBtn = page.locator("button[type='submit']:has-text('Subscribe')");

    // Try submitting empty email to trigger validation
    await subscribeBtn.click();
    const errorMsg = page.locator("p.form-error:has-text('Enter Your Email')");
    await expect(errorMsg).toBeVisible();

    // Fill valid email and submit
    await emailInput.fill("testsubscriber@gmail.com");
    await subscribeBtn.click();

    // Verify success modal pops up (rendered as an h1 inside Modal)
    const successModalHeader = page.locator("h1:has-text('Subscribed!')");
    await expect(successModalHeader).toBeVisible();
  });

  test("2. Table Reservation Form - Validates & Submits successfully", async ({ page }) => {
    // Navigate to Reservation page
    await page.goto("/");
    const reservationLink = page.locator("a:has-text('Reservation')");
    if (await reservationLink.count() > 0) {
      await reservationLink.first().click();
    } else {
      await page.goto("/reservation");
    }

    const nameInput = page.locator("#customerName");
    const personInput = page.locator("#person");
    const dateInput = page.locator("#date");
    const timeInput = page.locator("#time");
    const submitBtn = page.locator("button[type='submit']:has-text('BOOK A TABLE')");

    // Click submit empty to trigger validations
    await submitBtn.click();
    await expect(page.locator("p.form-error").first()).toBeVisible();

    // Fill details
    await nameInput.fill("Vikram Pal");
    await personInput.fill("4");
    await dateInput.fill("2026-06-01");
    await timeInput.fill("18:30");

    await submitBtn.click();

    // Verify success modal (rendered as h1)
    const modalTitle = page.locator("h1:has-text('Reservation Successful!')");
    await expect(modalTitle).toBeVisible();
  });

  test("3. Product Order Form - Validates & Submits successfully", async ({ page }) => {
    await page.goto("/");
    const menuLink = page.locator("a:has-text('Menu')");
    if (await menuLink.count() > 0) {
      await menuLink.first().click();
    } else {
      await page.goto("/menu");
    }

    const nameInput = page.locator("#Menu_name");
    const phoneInput = page.locator("#Menu_phone");
    const productSelect = page.locator("#Menu_product");
    const qtyInput = page.locator("#qty");
    const addressInput = page.locator("#address");
    const citySelect = page.locator("#city");
    const countrySelect = page.locator("#country");
    const pinCodeInput = page.locator("#pinCode");
    const submitBtn = page.locator("button[type='submit']:has-text('ORDER NOW')");

    // Trigger validation
    await submitBtn.click();
    await expect(page.locator("p.form-error").first()).toBeVisible();

    // Fill valid data
    await nameInput.fill("Vikram Pal");
    await phoneInput.fill("9022606597");
    await productSelect.selectOption("cappuccino");
    await qtyInput.fill("2");
    await addressInput.fill("Hanuman Nagar, Goregaon East");
    await citySelect.selectOption("mumbai");
    await countrySelect.selectOption("india");
    await pinCodeInput.fill("400065");

    await submitBtn.click();

    // Verify success (rendered as h1)
    const modalTitle = page.locator("h1:has-text('Order Placed!')");
    await expect(modalTitle).toBeVisible();
  });

  test("4. Contact Us Form - Validates & Submits successfully", async ({ page }) => {
    await page.goto("/");
    const contactLink = page.locator("a:has-text('Contact')");
    if (await contactLink.count() > 0) {
      await contactLink.first().click();
    } else {
      await page.goto("/contact");
    }

    const fnameInput = page.locator("#fname");
    const lnameInput = page.locator("#lname");
    const emailInput = page.locator("#email");
    const phoneInput = page.locator("#phone");
    const productSelect = page.locator("#product");
    const messageInput = page.locator("#message");
    const submitBtn = page.locator("button[type='submit']:has-text('Send Message')");

    // Trigger validation
    await submitBtn.click();
    await expect(page.locator("p.form-error").first()).toBeVisible();

    // Fill valid details
    await fnameInput.fill("Vikram");
    await lnameInput.fill("Pal");
    await emailInput.fill("vikrampal038@gmail.com");
    await phoneInput.fill("9022606597");
    await productSelect.selectOption("espresso");
    await messageInput.fill("Looking forward to partnering with CodeNap Café!");

    await submitBtn.click();

    // Verify success (rendered as h1)
    const modalTitle = page.locator("h1:has-text('Message Sent!')");
    await expect(modalTitle).toBeVisible();
  });
});

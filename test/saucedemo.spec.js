const { test, expect } = require('@playwright/test');

test('User logs in, adds product, verifies name, and logs out', async ({ page }) => {

  await page.goto('/'); 

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add product to cart
  const productName = await page.locator('.inventory_item_name').first().textContent();
  await page.locator('.inventory_item').first().locator('.btn_inventory').click();

  // Go to cart
  await page.click('.shopping_cart_link');

  // Verify product in cart
  const cartName = await page.locator('.inventory_item_name').textContent();
  await expect(cartName.trim()).toBe(productName.trim());

  // Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

});

import { test, expect } from '@playwright/test';

test.describe('Access documents', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/');
	});

	test('user is able to see all folders', async ({ page }) => {});

	test('user is able to open a folder and view the contents', async ({
		page,
	}) => {});

	test('user is able to sort folders by name', async ({ page }) => {});

	test('user is able to sort folders by size', async ({ page }) => {});

	test('user is able to sort folders by date', async ({ page }) => {});

	test('user is able to filter by filename', async ({ page }) => {});
});

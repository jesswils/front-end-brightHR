import { test, expect } from '@playwright/test';

test.describe('Access documents', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/');
	});

	test('on initial page load, user is able to see all files and folders', async ({
		page,
	}) => {
		// expect to see two pdf documents, two folders and a csv file
	});

	test('user is able to open a folder and view the contents', async ({
		page,
	}) => {
		// user clicks on either folder and is shown the contents
		// expect to see expenses > claim form and fuel allowance
		// expect to see misc > christmas party doc and welcome to the company mov
	});

	test('user is able to sort folders by name', async ({ page }) => {
		// expect to see folders sorted in alphabetical order
		// also in reverse order
	});

	// test('user is able to sort folders by size', async ({ page }) => {
	// });

	test('user is able to sort folders by date', async ({ page }) => {
		// expect to see date added earliest > latest
		// also in reverse order
	});

	test('user is able to filter by filename', async ({ page }) => {
		// expect to see files sorted in alphabetical order
		// also in reverse order
	});
});

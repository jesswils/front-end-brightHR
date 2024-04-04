import { test, expect } from '@playwright/test';

test.describe('Access documents', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/');
	});

	// check the app is online
	// check the table is visible

	test('on initial page load, user is able to see all files and folders', async ({
		page,
	}) => {
		// expect to see two pdf documents, two folders and a csv file

		const employeeHandbook = page.getByText('Employee Handbook');
		const holidayPolicy = page.getByText('Public Holiday policy');
		const expensesFolder = page.getByText('Expenses');
		const costCenters = page.getByText('Cost centres');
		const miscFolder = page.getByText('Misc');

		await expect(employeeHandbook).toBeVisible();
		await expect(holidayPolicy).toBeVisible();
		await expect(expensesFolder).toBeVisible();
		await expect(costCenters).toBeVisible();
		await expect(miscFolder).toBeVisible();
	});

	test('user is able to open a folder and view the contents', async ({
		page,
	}) => {
		// user clicks on either folder and is shown the contents
		// expect to see expenses > claim form and fuel allowance
		// expect to see misc > christmas party doc and welcome to the company mov
		await page.getByText('Expenses').click();
		await expect(page.getByText('Expenses claim form')).toBeVisible();
		await expect(page.getByText('Fuel allowances')).toBeVisible();

		await page.getByText('Misc').click();
		await expect(page.getByText('Christmas party')).toBeVisible();
		await expect(page.getByText('Welcome to the company!')).toBeVisible();
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

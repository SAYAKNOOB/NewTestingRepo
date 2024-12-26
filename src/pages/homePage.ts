import { expect, Page } from "@playwright/test";

import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class HomePage {
  searchForTopic(email: string, PasswordBox: string, InstituteBox: string) {
    throw new Error("Method not implemented.");
  }
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  // Corrected locators for the form

  public Elements = {
    // firstNameBox: `//input[@name="firstName"]`,
    // lastNameBox: `//input[@name="lastName"]`,
    // emailBox: `//input[@name="email"]`,
    // checkBox: `//span[@class="checkmark"]`,
    // validateBox: `//div[text()="Surprise! You've got a 14-day PRO Plan trial!"]`,
    // submitBox: `//button[@type="submit"]`,
    EMailBox: `//input[@class="mb15 next_input "]`,
    PasswordBox: `//input[@class="next_input "]`,
    InstituteBox: `//input[@class="header__searchBox header__p-18"]`,
    checkBox: `//div[@class="recaptcha-checkbox-border"]`,
    SignupBox: `//div[@class="recaptcha-checkbox-border"]`,
    validateBox: `//*[@id="login"]/div/div[2]/div/div[3]/div[1]/div/text()`,
    // ErrorBox: `//div[text()="Invalid email or password."]`
  };

  // Navigate to the signup page

  async navigateToHomePage() {
    await this.base.goto("https://www.geeksforgeeks.org/");
  }

  // Fill the form with user details and submit

  async fillOutForm(email: string, PasswordBox: string, InstituteBox: string) {
    // Fill the input fields

    await this.page.locator(this.Elements.EMailBox).fill(email);

    await this.page.locator(this.Elements.PasswordBox).fill(PasswordBox);

    await this.page.locator(this.Elements.InstituteBox).fill(InstituteBox);

    // Check the checkbox if it's not already checked

    const checkBox = this.page.locator(this.Elements.checkBox);

    await checkBox.click();

    // Submit the form

    await this.page.locator(this.Elements.SignupBox).click();
  }

  // Validate the success message after submitting the form

  async validateSuccessMessage() {
    const successMessage = this.page.locator(this.Elements.validateBox);

    await expect(successMessage).toBeVisible(); // Verify that the success message is visible
  }
}

import { fixture } from "../../hooks/pageFixture";
import { HomePage } from "../../pages/homePage";
import { Given, Then, When } from "@cucumber/cucumber";

let homePage: HomePage;

Given("user navigates to the geeks for geeks home page", async function () {
  homePage = new HomePage(fixture.page);
  await homePage.navigateToHomePage();
});

When(
  "user should be able to enter {string}, {string}, {string}", 
  async function (firstName: string, lastName: string, email: string) {
    homePage.fillOutForm(firstName, lastName, email);
  }
);

Then("validation of text", async function () {
  await homePage.validateSuccessMessage();
});

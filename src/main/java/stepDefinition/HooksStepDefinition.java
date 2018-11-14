//package stepDefinition;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class HooksStepDefinition {
//
//	@Before
//	public void setUP() {
//		System.out.println("Launch Application");
//	}
//
//	@After
//	public void tearDown() {
//		System.out.println("Close Application");
//
//	}
//
//	@Given("^user is on a deal page$")
//	public void user_is_on_a_deal_page() throws Throwable {
//		System.out.println("user is on a deal page");
//	}
//
//	@When("^user fills deals form$")
//	public void user_fills_deals_form() throws Throwable {
//		System.out.println("user fills deals form");
//
//	}
//
//	@Then("^deal is created$")
//	public void deal_is_created() throws Throwable {
//		System.out.println("deal is created");
//
//	}
//
//	@Given("^user is on a contacts page$")
//	public void user_is_on_a_contacts_page() {
//		System.out.println("user is on a contacts page");
//
//	}
//
//	@When("^user fills contact form$")
//	public void user_fills_contact_form() throws Throwable {
//		System.out.println("user fills contact form");
//
//	}
//
//	@Then("^contact is created$")
//	public void contact_is_created() throws Throwable {
//		// Write code here that turns the phrase above into concrete actions
//		System.out.println("contact is created");
//	}
//
//	@Given("^user is on a mail page$")
//	public void user_is_on_a_mail_page() throws Throwable {
//		System.out.println("user is on a mail page");
//	}
//
//	@When("^user fills mail form$")
//	public void user_fills_mail_form() throws Throwable {
//		System.out.println("user fills mail form");
//	}
//
//	@Then("^mail is created$")
//	public void mail_is_created() throws Throwable {
//		System.out.println("mail is created");
//	}
//
//}

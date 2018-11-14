package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooks {

	//Global Hooks
	@Before(order=0)
	public void setUP1() {
		System.out.println("1-Launch Application");
	}

	@After(order=0)
	public void tearDown1() {
		System.out.println("1-Close Application");

	}
	
	@Before(order=1)
	public void setUP2() {
		System.out.println("2-Launch Application");
	}

	@After(order=1)
	public void tearDown2() {
		System.out.println("2-Close Application");

	}

	// Local Hooks - for First scenario
	@Before("@First")
	public void firstBefore() {
		System.out.println("First Scenario: Launch Application");
	}

	@After("@First")
	public void firstAfter() {
		System.out.println("First Scenario: Close Application");

	}

	// Local Hooks - for Second scenario
	@Before("@Second")
	public void secondBefore() {
		System.out.println("Second Scenario: Launch Application");
	}

	@After("@Second")
	public void secondAfter() {
		System.out.println("Second Scenario: Close Application");

	}
	
	// Local Hooks - for Third scenario
	@Before("@Third")
	public void thirdBefore() {
		System.out.println("Second Scenario: Launch Application");
	}

	@After("@Third")
	public void thirdAfter() {
		System.out.println("Second Scenario: Close Application");

	}
	
	
	
	
	@Given("^this is first precondition$")
	public void this_is_first_precondition(){
		System.out.println("First Given");
	}

	@When("^this is first condition$")
	public void this_is_first_condition() throws Throwable {
		System.out.println("First When");
	}

	@Then("^this is first expected outcome$")
	public void this_is_first_expected_outcome() throws Throwable {
		System.out.println("First Then");
	}

	@Given("^this is second precondition$")
	public void this_is_second_precondition() throws Throwable {
		System.out.println("Second Given");
	}

	@When("^this is second condition$")
	public void this_is_second_condition() throws Throwable {
		System.out.println("Second When");
	}

	@Then("^this is second expected outcome$")
	public void this_is_second_expected_outcome() throws Throwable {
		System.out.println("Second Then");
	}

	@Given("^this is third precondition$")
	public void this_is_third_precondition() throws Throwable {
		System.out.println("Third Given");
	}

	@When("^this is third condition$")
	public void this_is_third_condition() throws Throwable {
		System.out.println("Third When");
	}

	@Then("^this is third expected outcome$")
	public void this_is_third_expected_outcome() throws Throwable {
		System.out.println("Third Then");
	}

}

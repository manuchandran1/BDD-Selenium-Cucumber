package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert; 

public class LoginStepDefinition 
{
	
	WebDriver driver;
	
	@Given("^user is already on Login page$")
	public void user_already_on_login_page() 
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}
	
	@When("^title of Login page is Free CRM$")
	public void title_of_Login_page_is_Free_CRM() 
	{
		String title = driver.getTitle();
		System.out.println("Login Page Title = " +title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);

	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)
	{
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}


	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button()
	{
		WebElement login_button = driver.findElement(By.xpath("//input[@value='Login']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", login_button);
		
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() 
	{
		String title = driver.getTitle();
		System.out.println("Home Page Title = " + title);
		Assert.assertEquals("CRMPRO", title);
	}
	

	
	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page() 
	{
		driver.switchTo().frame("mainpanel");
		WebElement contacts_link = driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
		Actions actions = new Actions(driver);
		actions.moveToElement(contacts_link).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		
	}

	@Then("^user enters the \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_enters_contact_details(String firstname, String lastname, String position) 
	{
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
	}

	@Then("^user saves the contact$")
	public void user_saves_the_contact() 
	{
		driver.findElement(By.xpath("//input[@value='Save']")).click();
	}
	
	
	@Then("^close the browser$")
	public void close_the_browser() 
	{
		driver.quit();
	}

}

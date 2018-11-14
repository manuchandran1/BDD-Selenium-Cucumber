//package stepDefinition;
//
//import java.util.List;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class DealStepDefinition {
//
//	WebDriver driver;
//
//	@Given("^user is already on Login page$")
//	public void user_is_already_on_Login_page() {
//		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/chromedriver");
//		driver = new ChromeDriver();
//		driver.get("https://www.freecrm.com");
//	}
//
//	@When("^title of Login page is Free CRM$")
//	public void title_of_Login_page_is_Free_CRM() {
//		String title = driver.getTitle();
//		System.out.println("Login Page Title = " + title);
//		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
//	}
//
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password(DataTable credentials) {
//		List<List<String>> data = credentials.raw();
//
//		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//
//	}
//
//	@Then("^user clicks on Login button$")
//	public void user_clicks_on_Login_button() {
//		WebElement login_button = driver.findElement(By.xpath("//input[@value='Login']"));
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("arguments[0].click();", login_button);
//	}
//
//	@Then("^user is on home page$")
//	public void user_is_on_home_page() {
//		String title = driver.getTitle();
//		System.out.println("Home Page Title = " + title);
//		Assert.assertEquals("CRMPRO", title);
//
//	}
//
//	@Then("^user moves to new deals page$")
//	public void user_moves_to_new_deals_page() {
//		driver.switchTo().frame("mainpanel");
//		WebElement contacts_link = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
//		Actions actions = new Actions(driver);
//		actions.moveToElement(contacts_link).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//	}
//
//	@Then("^user enters the deal details$")
//	public void user_enters_the_deal_details(DataTable dealData) {
//		List<List<String>> dealValues = dealData.raw();
//		driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
//		driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
//		driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
//		driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
//
//	}
//
//	@Then("^close the browser$")
//	public void close_the_browser() {
//		driver.quit();
//	}
//
//}

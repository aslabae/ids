package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class fs {

    String subject = "";

    @When("{string} with parenthesis is given")
    public void string_with_parenthesis_is_given(String string) {
        System.out.println("originally is " + subject);
        subject = string;
    }

    @Then("balancer should check if the given string is balanced")
    public void balancer_should_check_if_the_given_string_is_balanced() {
        boolean checked = isBalanced(subject);
        System.out.println("Aydin abi says: " + checked);

        boolean checked2 = isBalanced2(subject);
        System.out.println("Aslan says: " + checked2);

        Assert.assertEquals(checked, checked2);
    }

    public boolean isBalanced(String s){
        char[] chars = s.toCharArray();

        if(chars[0] == ')'){
            return false;
        }

        int countOfO = 0;
        int countOfC = 0;
        for(int i = 0; i < chars.length; i++){
            if ((chars[ i ] == '(')) {
                countOfO++;
            } else {
                countOfC++;
            }
            if(countOfC > countOfO) return false;
        }

        if(countOfO == countOfC) return true;

        return false;
    }

    public boolean isBalanced2(String s){
        String copy = s;
        int before = 0;
        int after = 0;
        do{
            before = copy.length();
            copy = copy.replace("()", "");
            after = copy.length();
        }while (after != before);

        if(after == 0)return true;

        else return false;
    }
}

Feature: The Login Feature

  Scenario Outline: As a user, I can see errors when not enough or invalid info

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message about missing <element>

    Examples:
      | username                | password | element  |
      | simplymahmoud@gmail.com | null     | password |
      | null                    | P@ssWord | email    |
      | null                    | null     | both     |
      | simplymahmoud@gmail,com | P@ssWord | nonemail |


  Scenario Outline: As a user, I can log with valid data

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see my account

    Examples:
      | username                | password |
      | simplymahmoud@gmail.com | P@ssWord |

  Scenario Outline: As a user, I can add new address

    Given I am on the login page
    When I login with <username> and <password>
    And I add new <address>
    Then I should see new <address> added

    Examples:
      | username                | password | address                                   |
      | simplymahmoud@gmail.com | P@ssWord | Mahmoud,Ali,Aan de Zoom,6,Uithoorn,1422RB |
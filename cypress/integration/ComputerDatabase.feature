Feature: Add computer

Scenario Outline: Add computer with all fields filled
    Given access the website
    When click to add a new computer
    And fill the data to adding the computer
    | pcName                      | introducedDate | discontinuedDate | company |                             
    | <pcName>                    | <introducedDate> | <discontinuedDate> | <company> |
    Then I click on create this computer button
    Then the computer should be created
    | pcName                      |
    | <pcName>                    |
    Then I search for the computer
    | pcName                      |
    | <pcName>                    |


    Examples:
        | pcName                      | introducedDate | discontinuedDate | company |                             
        | pc test all informations    | 2019-01-01     | 2019-01-08       | RCA     |
        | pc test without dates       |                |                  | RCA     |
        | pc test without introduced date |             | 2019-01-08       | RCA     |
        | pc test without discontinued date | 2019-01-01 |                  | RCA     |
        | pc test without company     | 2019-01-01     | 2019-01-08       |         |

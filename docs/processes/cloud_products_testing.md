## Glasswall Cloud SDK Test Approach

**Introduction**

This test approach document describes the approach, process, workflows and methodologies used to plan, organize, execute and manage testing of the Cloud SDK products.

**In Scope**

The test scope includes:

- Testing of all functional, performance &amp; security requirements
- Quality requirements for customer onboarding

**Out of Scope**

The test scope excludes:

- Testing of disaster recovery

**Quality Objectives**

The objective of testing the Cloud SDK is to confirm that the product meets the full requirements including non-functional and satisfies the use case scenarios as well as maintaining the quality of the products. When using the products, the user should find that the project has met or exceeded all their expectations.

Any changes, additions, or deletions to the requirements should be documented and tested at the highest level of quality possible.

Identify and expose all issues and associated risks, communicate all known issues to the project squad/team and ensure that all issues are addressed before release.

**Roles and Responsibilities**

Product owner

- Develop Use cases and requirements
- Products availability on the store with required details

Developer

- Develop the products
- Conduct Unit &amp; integration testing
- Provide test environment
- Support test team

QA

- Support testing activities as Customer Advocates
- End to End functional testing of each product
- Performance testing of each product
- Usability &amp; Customer acceptance test for each product representing end users.
- Identify dependencies for &amp; between test scripts and request support for testing &amp; user accounts set up or data etc...

InfoSec **:**

- Support security testing of the products

SRE:

- Products &amp; platform monitoring in Production

**Test Execution**

**Unit &amp; Integration Tests**

- Unit Testing is conducted by the Developer during code development process to ensure that proper functionality and code coverage have been achieved both during coding and in preparation for acceptance into the QA environment
- Integration testing conducted to check the functions integration with external services

**Smoke Tests**

- Automated smoke tests will be added to verify the major functionality at a high level &amp; determine if further testing is possible at every code deploy
- Testing will be suspended on the affected release when smoke tests fails &amp; resumed when all smoke tests have passed

**End to End Functional Acceptance Tests**

- Integration tests which will simulate an entire workflow, request/response cycle making http requests against deployed API &amp; checking response, exercising the functions to ensure that everything work as expected etc...
- These tests will include the critical path scenarios targeted on features and functionalities of the products from a user perspective
- The critical paths for each product should be clearly defined from file submission through to receipt of protected file
- The tests scenarios to validate the paths will be defined &amp; automated in collaboration with the developer
- The tests should aim at identifying:

  - Configuration issues: Testing access, limits, functions have the right IAM permissions, the S3 events are received &amp; saved to the correct buckets etc.
  - Technical workflow issues: Testing for timeouts, that requests are being parsed &amp; used as expected &amp; successful responses and errors are handled correctly
  - Business logic issues: Testing that the business logic rules of the products are followed
  - Integration issues: Testing incoming request structure is read correctly &amp; the orders are stored correctly to the database etc.

- Testing will be suspended &amp; resumed to accommodate any critical scope change that impacts the critical paths

The various tests used will be run as a regression testing during the repeated cycles of identifying bugs and taking receipt of new builds containing bug fix code changes

**Usability, UI &amp; Customer Acceptance Tests**

These tests will include browser automated tests &amp; manual tests covering the user flow and should aim at ensuring:

- A potential customer can successfully view, try, purchase, &amp; receive the best experience possible using different order and product scenarios
- The customer can easily consume the products with none or minimum support
- All necessary setup instructions, file limitations, requirements, support etc. are clearly visible
- The user journey is as expected on a mobile device (Android, Apple phones, tablets)
- The user journey is successful across main browser types
- The user journey is as expected from different locations &amp; correct currency applied (UK &amp; US)
- The correct purchased credits or file quantity is fulfilled
- The order processing is as expected, statuses are accurately updated, the available payment methods can be used etc.
- The order is fulfilled in the expected timings defined for each product, with the required customer interaction /communication steps
- The billing system works &amp; plan selections, upgrade, downgrades &amp; cancellations can be handled smoothly

**Performance &amp; Load Tests**

These tests will aim at checking:

- The functions execution limits &amp; the performance of the system
- The system&#39;s ability to handle concurrent executions &amp; different amount of traffic load
- High availability &amp; the response time, slowness &amp; error rate

**Security Analysis**

The system will be security monitored to ensure:

- The security of the data, the functions and their dependencies to uncover any vulnerabilities
- Access is assigned on least privilege principle
- Security tagging is applied on all assets
- All accounts are monitored for malicious indicators
- Continuous internal penetration testing of GW AWS assets

**Production Monitoring**

Monitoring in |Production will aim at measuring:

- Latency: The latency of the successful &amp; failed requests
- Traffic: How much demand is being placed on the system
- Errors: The rate of requests that fail either implicitly or explicitly but coupled with wrong content or by policy
- Saturation: How full the system is, a measure of the system fraction, emphasizing the resources that are most constrained

**Bug Reporting**

- The test results, issues &amp; any major dependencies will be reported immediately at each test run via Jira or other incoming issues/bugs will be tracked in GitHub

- The bug Severity levels for the products should be defined &amp; correctly assigned to each bug when raised while the priority will be assigned at triage as per the current bug priority level set in the Azure DevOps wiki.

**Test Completeness**

Testing for each product will be considered complete when the following conditions have been met:

- The product is stable &amp; meets functional requirements, testing is complete
- The user journey on purchasing of the product on the store is as defined
- Script execution of all test cases in all areas passed.
- Automated test cases in all areas passed.
- All priority 1 and 2 bugs resolved and closed.
- The product&#39;s functions can handle the required load &amp; meet the expected performance level
- The product has been scanned for security vulnerabilities meet expected level of security

**Other Considerations:**

- QA environment should be an exact replica of the production environment

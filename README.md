# MVP CMS Website
## About
This is the UI that I created **quickly** for an MVP project/CMS that I was building.

## Setup and deployment
- First you will need to clone the repo to your local machine and run `npm install`.
- You will need to have the API's deployed if you with to be able to Login/update content for the website.
- In the Environments.ts file you will need to update the API endpoint URLs. (We never got to the point of integrating directly Route53 and a domain name. This is the reason for the paths being directly to the APIGateway URLs. It still works though)
- To run the project locally, run `ng serve` in your terminal and open http://localhost:4200 in your browser.

### Disclaimer
This project was abandoned midway through development. I know the authenticated UI is missing some small things like 'image upload' icons etc.
There was also a lot of experimenting that occurred during the development of the website, in order to get the most performance out of the website, such as packaging Angular Components and Services in modules rather than have them separately as per the Angular Styleguide.

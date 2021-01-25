
# hours-worked-api
Small project to control employee hours-payment, applying clean architecture in node.js

### Install🔧

*Build project (typescript to javascript)*
*this will generate the dist folder, this is the first step*

    npm run build

## Running the tests ⚙️
*Tools for testing: **mocha and chai***

    npm run test
  
## Start📦

*init server for API rest  and UI (default)* 

    npm start  

*for cli, it is necessary to add a string with the file name, in this case "test.txt"*
    
    npm start cli test.txt
for API rest and UI

    npm start res-ui

*for help*

    npm help

## How to use
#### *for browser (API REST)*
  http://localhost:3000/api/test.txt

![UI](./screenshoots/capturaREST.png?raw=true "Title")
  
#### *for browser (UI)*
http://localhost:3000/test.txt

![UI](./screenshoots/capturaUI.png?raw=true "Title")

#### *for CLI (example)*

![CLI](https://github.com/byronrosas/hours-worked-api/blob/main/capturaCLI.png?raw=true)

## Developed with 🛠️
 - Typescript V4.1.3
 - Node.js v12.18.1
## Methodology 🛠️
This project is built based on the clean architecture of Robert C. Martin.  
 - Starting by defining the domain layer:
	 - Entities:
		 - Employee, Payment, Formatters  
		 - EmployeFacade for the employee payment process  
		 - In this layer I seek to use decoupling the Payment with the Employee so that the software is maintainable in the future.  
	- Use cases:  
		- Logic of the application, I use the repository and join it with the business entities.  
	- Controller:  execute the use case.  
	- Presenters:  Convert the data to a viewable format  
		- CLIPresenter, RESTPresenter, UIPresenter  
	- Abstractions: Repository interfaces  
- Detail layer:  
	- Repositories:  In this case only the FileRepository was used  
	- Views:  CLIPresenter, RESTPresenter (rest and ui)

![CleanArchitecture Robert C. Martin](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)Clean Architecture - Robert C. Martin

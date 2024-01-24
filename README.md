### Installation

1. The backend and the database can be run using docker-compose `docker-compose up`
2. Goto frontend directory and install required dependencies using `yarn install` and run the development server using `yarn run dev`


### Screenshots

1. Main Transaction Table

![Transaction Table]("./assets/transaction.png")
![Error Page]("./assets/error.png")
![Modal]("./assets/modal.png")


[Database documentation link](https://docs.google.com/spreadsheets/d/1sWK8aCZCYfvnmLOMpZN1cN-NrcaqmAREcvryfmqpStk/edit?usp=sharing)

### Things to improve upon:

1. There are couple of things I noticed later on(like today lol) so missed out on implementation. The first is the transaction database model that I have setup is not sufficient. I noticed that in the modal there is account information of both the parties to and from including the date of settlement i suppose. For now I've used the date field only to display in the frontend. 

2. In the frontend the api call could have been done better. The base url could have been taken from `.env` variable and a sepearte module to handle the api calls can be used. For now I've used only single api, but suppose when we click on the transaction modal we want to do an extra api call to fetch the info then in such use case we can also implement memoization to avoid repetative api calls.

3. Various functions have been used which could have been located inside a util folder for code reusability.


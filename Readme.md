## Angular
* Start the angular docker container (which is a simple node container that installs angular-cli) by using the command 
  * ```docker-compose run --service-ports angular```
* "*--service-ports*" is needed so that the corresponding ports are exposed, as per design this is not done (as in docker-compose up)
* navigate to the frontend directory, where the angular app is located 
  * ```cd bookstore20```
* ```npm install``` to get all dependencies
* ```ng serve --host 0.0.0.0 --poll=2000```  
(--poll is optional) to start the angular development server and follow the instructions, including the project URL <http://localhost:4200>


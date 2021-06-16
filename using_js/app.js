// The application is executed through the creation of the different elements: UserService, UserView 
// and UserController

const app = new UserController(new UserService(), new UserView());
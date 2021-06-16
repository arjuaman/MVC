// The operations performed on users are carried out in the service. 
// The service is what allows the models to be anemic, since all the logic load is in them. 
// In this specific case, we will use an array to store all users and build the four methods 
// associated with reading, modifying, creating and deleting (CRUD) users.

/**
 * @class Service
 *
 * Manages the data of the application.
 */
 class UserService {
  constructor() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    this.users = users.map(user => new User(user));
  }

  bindUserListChanged(callback) {
    this.onUserListChanged = callback;
  }

  _commit(users) {
    this.onUserListChanged(users);
    localStorage.setItem('users', JSON.stringify(users));
  }

  add(user) {
    this.users.push(new User(user));

    this._commit(this.users);
  }

  edit(id, userToEdit) {
    this.users = this.users.map(user =>
      user.id === id
        ? new User({
            ...user,
            ...userToEdit
          })
        : user
    );

    this._commit(this.users);
  }

  delete(_id) {
    this.users = this.users.filter(({ id }) => id !== _id);

    this._commit(this.users);
  }

  toggle(_id) {
    this.users = this.users.map(user =>
      user.id === _id ? new User({ ...user, complete: !user.complete }) : user
    );

    this._commit(this.users);
  }
}
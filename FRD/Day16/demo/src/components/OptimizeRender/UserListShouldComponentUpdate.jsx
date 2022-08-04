import React, { Component } from "react";
import _ from "lodash";

export class UserList extends Component {
  shouldComponentUpdate(nextProps) {
    if (_.isEqual(nextProps.users, this.props.users)) {
      return false;
    }

    return true;
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <h2>UserListShouldComponentUpdate</h2>
        {users?.length > 0 && (
          <div>
            {users.map((user) => (
              <p>
                Name: {user.name}, age: {user.age}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default UserList;

import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
import * as axios from "axios";
import userIcon from "../../assets/images/avatar.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  };

  render() {
    const pages = Math.ceil(this.props.usersTotalCount / this.props.pageSize);

    const pageNumbers = [];
    for (let x = 1; x <= pages; x++) {
      pageNumbers.push(x);
    }

    return (
      <div className={css.usersList}>
        {this.props.users.map((user) => (
          <UserItem
            name={user.name}
            status={user.status}
            isFollowed={user.isFollowed || false}
            icon={user.photos.small != null ? user.photos.small : userIcon}
            // country={user.address.country || 'Belarus'}
            // city={user.address.city || 'Minsk'}
            id={user.id}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            key={user.id}
          />
        ))}
        <div className={css.pagination}>
          <a
            href="#"
            onClick={() => {
              this.onPageChanged(1);
            }}
          >
            First
          </a>
          {pageNumbers
            .map((p) => {
              return (
                <a
                  href="#"
                  key={p}
                  className={this.props.selectedPage === p && css.selectedPage}
                  onClick={() => {
                    this.onPageChanged(p);
                  }}
                >
                  {" "}
                  {p}{" "}
                </a>
              );
            })
            .slice(
              this.props.selectedPage > 4 ? this.props.selectedPage - 5 : 0,
              this.props.selectedPage + 4
            )}{" "}
          <a
            href="#"
            onClick={() => {
              this.onPageChanged(pages);
            }}
          >
            Last
          </a>
          ({pages})
        </div>
      </div>
    );
  }
}

export default Users;

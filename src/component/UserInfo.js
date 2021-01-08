import React from "react";
import moment from "moment";
import Location from "../assets/images/location.svg";
import Twitter from "../assets/images/twitter.svg";
import Link from "../assets/images/link.svg";
import Email from "../assets/images/email.svg";
import Building from "../assets/images/building.svg";

const UserInfo = ({ userData }) => {
  return (
    <div className="w-full lg:w-3/12 bg-white">
      <img
        src={userData.avatar_url}
        className="rounded-full border-4 border-gray-300 w-32 h-32 mx-auto"
        alt="user profile"
        style={{ position: "relative", zIndex: 1 }}
      />
      <div
        style={{ position: "relative", top: "-60px" }}
        className="pt-16 pb-5 px-5 rounded-lg  shadow-xl border "
      >
        <div className="text-xl md:text-2xl text-center font-bold mt-5">
          {userData.name}
        </div>
        <div className="text-center">
          <a
            href={"https://github.com/" + userData.login}
            className="text-lg md:text-xl font-bold text-blue-600"
          >
            @{userData.login}
          </a>
        </div>

        <div className="text-center text-gray-600 mt-5">
          Joined {moment(userData.created_at).format("Do MMM, YYYY")}
        </div>

        {/* bio */}
        {userData.bio && (
          <div className="border-t pt-5 mt-5">{userData.bio}</div>
        )}

        {/* followings/followrs */}
        <div className="flex flex-wrap justify-around border-t pt-5 mt-5">
          <div className="w-1/3">
            <div className="font-bold text-xl">{userData.followers}</div>
            Followers
          </div>
          <div className="w-1/3">
            <div className="font-bold text-xl">{userData.following}</div>
            Following
          </div>
          <div className="w-1/3">
            <div className="font-bold text-xl">{userData.public_repos}</div>
            Repos
          </div>
        </div>
        {/* extra */}
        <div className="border-t pt-5 mt-5">
          {userData.location && (
            <div className="flex mt-3">
              <img
                src={Location}
                alt="location"
                width="21px"
                className="mr-2"
              />
              {userData.location}
            </div>
          )}
          {userData.company && (
            <div className="flex mt-3">
              <img
                src={Building}
                alt="building"
                width="21px"
                className="mr-2"
              />
              {userData.company}
            </div>
          )}
          {userData.email && (
            <div className="flex mt-3">
              <img src={Email} alt="email" width="21px" className="mr-2" />
              {userData.email}
            </div>
          )}
          {userData.twitter_username && (
            <div className="flex mt-3">
              <img src={Twitter} alt="twitter" width="21px" className="mr-2" />
              {userData.twitter_username}
            </div>
          )}
          {userData.blog && (
            <div className="flex mt-3">
              <img src={Link} alt="blog link" width="21px" className="mr-2" />
              <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                {userData.blog}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

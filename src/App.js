import React, { useEffect, useState } from "react";
import axios from "axios";



import UserInfo from './component/UserInfo';
import Repos from "./component/Repos";
 import Activity from "./component/Activity";
import Nav from "./component/Nav";


function App() {
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [ searchRepo, setSearchRepo ] = useState('')

  // search for the repo 

  const handlerChange = e => setSearchRepo(e.target.value);
  function search (repos) {
    return repos.filter(
      (repo) => repo.name.toUpperCase().indexOf(searchRepo) !== -1
    );
  }

 
  
  // useEffect to search for my data
  useEffect(() => {
    // fetch user data
    axios.get("https://api.github.com/users/lamilekan263")
      .then((response) => {
      setUserData(response.data);
    });

    // fetch repo data
    axios
      .get("https://api.github.com/users/lamilekan263/repos")
      .then((response) => {
        setRepoData(response.data);
      });

    // // // fetch activities
    axios
      .get("https://api.github.com/users/lamilekan263/events")
      .then((response) => {
        setActivityData(response.data);
      });

    // fetch new repos
    
  }, [searchRepo]);

  return (
    <>
      <Nav />
      {userData && (
        <div className="container w-full px-4 mx-auto my-5 md:my-10">
          <div className="lg:flex lg:justify-between relative">
            <UserInfo userData={userData} />
            <Repos
              repoData={search(repoData)}
              onChangeHandler={handlerChange}
              value={searchRepo}
             
            />
            <Activity activityData={activityData} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

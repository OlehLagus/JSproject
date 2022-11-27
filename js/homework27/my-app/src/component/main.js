import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


// const Main = () => {



// //  const styledMainBanner = {
// //   width: '100%',
// //   height: '500px',
// //   backgroundColor: 'blue'
// // }

// // const styledBanner = {
// //    width: '860px',
// //    height: '500px'
// // }



// return (<div className="mainBanner" style={styledMainBanner}>
//   /<img src= {require('../banner.png')} style = {styledBanner}></img>
// </div>)
// }

const styleMain = {
  alignItems: "center",
}


function Main() {
  const [users, setUsers] = useState();
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json());
    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);


  return (
    <div className="main" style = {styleMain}>
      {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">{user.title}</div>
          </div>
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);


export default Main;
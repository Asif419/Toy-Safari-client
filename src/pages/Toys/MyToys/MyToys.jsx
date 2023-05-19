import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  // console.log(toys);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}`)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [user]);


  return (
    <div>
      <h2>my toys</h2>
    </div>
  );
};

export default MyToys;
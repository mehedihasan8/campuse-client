import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CollegeReview from "./CollegeReview";

const MyColleges = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://campuse-server.vercel.app/student?email=${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center bg-slate-100 px-20 py-28 rounded">
        {users.map((item) => (
          <CollegeReview key={item._id} item={item}></CollegeReview>
        ))}
      </div>
    </div>
  );
};

export default MyColleges;

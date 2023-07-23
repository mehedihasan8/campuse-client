import { useEffect, useState } from "react";
import ClasseCard from "./ClasseCard";

const PopulerClasses = () => {
  const [allData, getData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);

  return (
    <div className="bg-slate-100 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded">
        {
          // eslint-disable-next-line react/jsx-key
          allData.slice(0, 3).map((d) => (
            <ClasseCard key={d.id} d={d}></ClasseCard>
          ))
        }
      </div>
    </div>
  );
};

export default PopulerClasses;

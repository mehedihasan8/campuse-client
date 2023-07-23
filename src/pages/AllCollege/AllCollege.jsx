import { useEffect, useState } from "react";
import Card from "./Card";

const AllCollege = () => {
  const [allData, getData] = useState([]);
  const [search, setSearch] = useState("");
  //   console.log(search);

  const filteredEngineers = allData.filter((enginee) => {
    const lowercaseSearch = search.toLowerCase();
    return (
      lowercaseSearch === "" ||
      enginee.college_name.toLowerCase().includes(lowercaseSearch) ||
      enginee.admission_dates.toLowerCase().includes(lowercaseSearch)
    );
  });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);
  return (
    <div className="bg-slate-100 py-5">
      <h1 className="text-center text-4xl font-bold mt-20 mb-2 font-mono uppercase">
        WELCOME TO Campus Ease
      </h1>
      <p className="px-10 text-center text-xl mt-4 ">
        Explore thousands of job opportunities with all the information you1234-
        need. Its your future
      </p>
      <div className="flex items-center justify-center gap-2 mt-10 mb-12">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by college name or admission date"
          className="input  border-2 border-[#c084fc]  md:w-[600px] py-2 px-2"
        />
        <button className="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
          Find College
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded">
        {
          // eslint-disable-next-line react/jsx-key
          filteredEngineers.map((d) => (
            <Card key={d.id} d={d}></Card>
          ))
        }
      </div>
    </div>
  );
};

export default AllCollege;

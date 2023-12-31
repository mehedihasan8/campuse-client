import { Link } from "react-router-dom";

const ClasseCard = ({ item }) => {
  return (
    // <div className="card card-compact w-80 bg-base-400 shadow-xl class-img">
    //   {/* <img className="w-full" src={d.college_image} alt={d.college_name} /> */}
    //   <figure>
    //     <img src={d.college_image} alt={d.college_name} />
    //   </figure>
    //   <div className="px-6 py-4">
    //     <div className="font-semibold text-xl mb-2">{d.college_name}</div>
    //     <p className="text-gray-700 text-base mb-2">
    //       Admission Dates: {d.admission_dates}
    //     </p>
    //     {/* <div className="flex items-center justify-between"> */}
    //     <p className="text-gray-700 text-base ">
    //       Sports:{" "}
    //       {d.sports_categories.map((sport, index) => (
    //         <ul className="text-[13px] inline-block" key={index}>
    //           {sport},
    //         </ul>
    //       ))}
    //     </p>
    //     <p className="text-gray-700 text-base mb-2 ">
    //       Events:{" "}
    //       {d.events.map((singled, index) => (
    //         <ul className=" text-[13px] inline-block" key={index}>
    //           {" "}
    //           {singled},
    //         </ul>
    //       ))}
    //     </p>
    //     {/* </div> */}
    //     <p className="text-gray-700 text-base mb-4">
    //       Research History: {d.research_history}
    //     </p>
    //     <Link to={`/details/${d.id}`}>
    //       <button className="btn  mt-2  inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring ">
    //         Details
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div className="card card-compact w-80 bg-base-400 shadow-xl class-img">
      <figure>
        <img
          src={item.college_image}
          className="h-[200px] rounded-md"
          alt={item.college_name}
        />
      </figure>
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{item.college_name}</div>
        <p className="text-gray-700 text-[14px]  mb-2">
          Admission Dates: {item.admission_dates}
        </p>
        <p className="text-gray-700  text-base mb-2">
          Events:{" "}
          {item.events.map((singled, index) => (
            <ul className=" text-[14px]  inline-block" key={index}>
              {" "}
              {singled},
            </ul>
          ))}
        </p>
        <p className="text-gray-700  text-[14px] mb-2">
          Research History: {item.research_history}
        </p>
        <p className="text-gray-700 text-[14px] ">
          Sports:{" "}
          {item.sports_categories.map((sport, index) => (
            <ul className="inline-block" key={index}>
              {sport},
            </ul>
          ))}
        </p>
        <Link to={`/details/${item.id}`}>
          <button className="btn mt-2  inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring ">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClasseCard;

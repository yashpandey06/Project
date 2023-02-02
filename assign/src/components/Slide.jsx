import React from "react";
import { useEffect, useState } from "react";
const Slide = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  function Checkbox() {
    setShow(!show);
  }
  return (
    <div className="m-8 rounded-2xl p-2 min-w-fit">
      {data.map((item) => (
        <div key={item.id}>
          <div className="flex flex-row justify-between items-center border shadow-lg my-4 rounded-lg h-32 w-full">
            <div className=" p-2 mx-2 text-md md:text-lg">{item.username}</div>
            <div className="flex flex-col justify-center mx-2  text-md md:text-lg">
              <h1 className="font-semibold md:text-lg">Contact</h1>
              <p>{item.name}</p>
            </div>

            <div className="flex flex-col justify-center mx-2 text-md md:text-lg">
              <h1 className="font-semibold md:text-lg">Company</h1>
              <p>{item.company.name}</p>
            </div>
            <div className="flex flex-col justify-center mx-2 text-md md:text-lg">
              <h1 className="font-semibold md:text-lg">City</h1>
              <p>{item.address.city}</p>
            </div>

            <button
              onClick={() => {
                Checkbox();
              }}
              className="Veiw_details bg-red-500 md:rounded-full rounded-md mx-2 text-white md:px-4 md:py-2 px-4 py-2"
            >
              View Details
            </button>
          </div>
          {/* this section should be hidden when false show otherwise show it */}
          {(show) && <>
            <div className=" m-4 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 duration-200  md:h-full ">
            <div className="Container_1  w-full my-4">
              <h1 className="font-semibold md:text-xl mb-2">Description</h1>
              <p>{item.company.bs}</p>
            </div>
            <div className="Container_2 my-4 flex justify-between  w-full">
              <div className="Sub_Container_1 px-2 md:p-0 flex flex-col justify-center">
                <div className="Contact ">
                  <h1 className="font-semibold md:text-xl mb-4">
                    Contact Person
                  </h1>
                  <p> {item.name}</p>
                </div>
                <div className="Company ">
                  <h1 className="font-semibold md:text-xl mb-4">Company</h1>
                  <p>{item.company.name}</p>
                </div>
                <div className="emails ">
                  <h1 className="font-semibold md:text-xl mb-4">Emails</h1>
                  <p> {item.email}</p>
                </div>
                <div className="phone ">
                  <h1 className="font-semibold md:text-xl mb-4">Phone</h1>
                  <p> {item.phone}</p>
                </div>
              </div>
              <div className="Sub_Container_2">
                <div className="Address">
                  <h1 className="font-semibold md:text-xl mb-4">Adresss</h1>
                  <p>
                    {item.address.street} {item.address.suit}{" "}
                    {item.address.city} {item.address.zipcode}
                  </p>
                </div>
                <div className="City ">
                  <h1 className="font-semibold md:text-xl mb-4">City</h1>
                  <p>{item.address.city}</p>
                </div>
              </div>
            </div>
          </div>
          </>}
          
        </div>
      ))}
    </div>
  );
};

export default Slide;

import React from "react";
import { FaTimes } from "react-icons/fa";

const DetailRoomModal = ({
  onClose,
  data,
  onReserve,
  bedData,
  facilityData,
}) => {
  const roomBed = bedData.filter((bed) => data.bedId.includes(bed.id));
  const roomFacility = facilityData.filter((facility) => data.facilityId.includes(facility.id));

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">Room Detail</p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="rounded-lg overflow-hidden w-40 h-28">
            <img src={data.picture} alt={data.roomnumber} />
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-2">
            <div className="text-md flex">
              <h1 className="font-bold">
                Room Number :{" "}
                <span className="font-normal">{data.roomnumber}</span>
              </h1>
            </div>
            <div className="text-md flex">
              <h1 className="font-bold">
                Size Area :{" "}
                <span className="font-normal">{data.sizearea}m²</span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 my-3">
            <div className="text-md flex">
              <h1 className="font-bold">
                Price Per Night :{" "}
                <span className="font-normal">${data.pricepernight}</span>
              </h1>
            </div>
            <div className="text-md flex">
              <h1 className="font-bold">
                Availability :{" "}
                <span className="font-normal">
                  {data.availability ? "YES" : "NO"}
                </span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 my-3">
            <div className="text-md">
              <h1 className="font-bold">Facilities :</h1>
              <ul className="list-disc pl-5">
                {roomFacility.map((facility) => (
                  <li key={facility.id}> {facility.facilityname} </li>
                ))}
              </ul>
            </div>
            <div className="text-md">
              <h1 className="font-bold">Beds :</h1>
              <ul className="list-disc pl-5">
                {roomBed.map((bed) => (
                  <li key={bed.id}> {bed.bedtype} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button
            onClick={onReserve}
            className="transition-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 text-white flex items-center justify-center transition-all duration-300 ease-in-out bg-indigo-600"
          >
            <span>Reserve</span>
          </button>
          <button
            onClick={onClose}
            className="transition-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 flex items-center justify-center transition-all duration-300 ease-in-out"
          >
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailRoomModal;

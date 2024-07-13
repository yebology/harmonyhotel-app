import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { tdStyle, thStyle } from "../services/Helper";
import ButtonCreate from "../components/small/ButtonCreate";
import SearchBar from "../components/small/SearchBar";
import BedTable from "../components/table/BedTable";
import DeleteModal from "../components/modal/DeleteModal";
import CreateBedModal from "../components/modal/create/CreateBedModal";

const datas = () => {
  return [
    { bedType: "Single", price: 100.0 },
    { bedType: "Double", price: 150.0 },
    { bedType: "Queen", price: 200.0 },
    { bedType: "King", price: 250.0 },
    { bedType: "Twin", price: 75.0 },
    { bedType: "Full", price: 175.0 },
    { bedType: "California King", price: 300.0 },
    { bedType: "Bunk", price: 125.0 },
    { bedType: "Murphy", price: 200.0 },
    { bedType: "Daybed", price: 180.0 },
  ];
};

const Bed = () => {
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // data
  const [selectedId, setSelectedId] = useState("");
  const [bedData, setBedData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [createBedData, setCreateBedData] = useState({
    bedType: "",
    price: "",
  });

  // create action
  const handleCreateDataChange = (field, value) => {
    setCreateBedData({ ...createBedData, [field]: value });
  };
  const handleCreateClick = () => {
    setShowCreateModal(true);
  };
  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };
  const handleCreateAction = async () => {
    setShowCreateModal(false);
  };

  // delete action
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = async () => {
    setShowDeleteModal(false);
  };

  // search action
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (datas) {
        setBedData(datas);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (bedData) {
      const filtered = bedData.filter((data) =>
        data.bedType.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, bedData]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          showDeleteModal || showCreateModal ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Bed"} createAction={handleCreateClick} />
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                message={"bed type"}
              />
            </div>
            <div className="min-w-full inline-block align-middle">
              <BedTable
                datas={filteredData}
                onDeleteClick={handleDeleteClick}
              />
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={handleCloseDeleteModal}
          onDelete={handleDeleteAction}
        />
      )}
      {showCreateModal && (
        <CreateBedModal
          onClose={handleCloseCreateModal}
          createBedData={createBedData}
          onChange={handleCreateDataChange}
          onAction={handleCreateAction}
        />
      )}
    </div>
  );
};

export default Bed;

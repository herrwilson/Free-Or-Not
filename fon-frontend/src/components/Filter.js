const Filter = ({
  filterName,
  filterStatus,
  filterLocation,
  handleFilterNameChange,
  handleFilterStatusChange,
  handleFilterLocationChange,
  filterRooms,
}) => {
  return (
    <form>
      <div>
        Search by:
        <p>name:</p>
        <input value={filterName} onChange={handleFilterNameChange}></input>
        <button onClick={filterRooms}>Search</button>
        <p>status:</p>
        <input value={filterStatus} onChange={handleFilterStatusChange}></input>
        <button onClick={filterRooms}>Search</button>
        <p>location:</p>
        <input
          value={filterLocation}
          onChange={handleFilterLocationChange}
        ></input>
        <button onClick={filterRooms}>Search</button>
      </div>
    </form>
  );
};

export default Filter;

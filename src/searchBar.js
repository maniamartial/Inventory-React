import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [maxprice, setMaxPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      maxprice: maxprice,
      type: type,
      brand: brand,
    });
    alert("relax");
  };
  return (
    <div className="cntainer">
      <div className="row">
        <h2 className="red">Search for any item</h2>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name: </label>
          <input
            type="text"
            id="name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="price-field">Max Price: </label>
          <input
            type="number"
            id="price-field"
            value={maxprice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <input
            type="text"
            id="type-field"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            type="text"
            id="brand-field"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          className="col-4 btn btn-primary"
          type="button"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

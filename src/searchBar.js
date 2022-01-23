import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [maxprice, setMaxPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.callback({
      name: name,
      maxprice: maxprice,
      type: type,
      brand: brand,
    });
  };
  return (
    <div>
      <h2>Search fir any item</h2>
      <form>
        <label htmlFor="name-field">Name: </label>
        <input
          type="text"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="price-field">Max Price: </label>
        <input
          type="number"
          id="price-field"
          value={maxprice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <br />
        <label htmlFor="type-field">Type:</label>
        <input
          type="text"
          id="type-field"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <label htmlFor="brand-field">Brand:</label>
        <input
          type="text"
          id="brand-field"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <button type="button" onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

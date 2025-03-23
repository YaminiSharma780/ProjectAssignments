import classNames from "classnames";
import lodash from "lodash";
import axios from "axios";
import { useState, useEffect } from "react";

const ITEMS_API_URL = "https://restcountries.com/v3.1/all";
const DEBOUNCE_DELAY = 500;

export default function Search() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(ITEMS_API_URL).then((res) => {
      const countryList = res.data.map((country) => country.name.common);
      console.log(countryList);
      setData(countryList);
    });
  }, []);

  const [textValue, setTextValue] = useState("");

  const handleInputChange = (e) => {
    setTextValue(e.target.value);
  };

  const filteredCountries = () => {
    if (!data) return [];
    return data.filter((country) =>
      country.toLowerCase().includes(textValue.toLowerCase())
    );
  };

  return (
    <div className="wrapper">
      <div className="control">
        <input
          onChange={handleInputChange}
          value={textValue}
          type="text"
          className="input"
        />
      </div>

      {textValue && filteredCountries().length > 0 && (
        <div className="list is-hoverable">
          {filteredCountries().map((country, index) => {
            return <div key={index}>{country}</div>;
          })}
        </div>
      )}

      {textValue && filteredCountries().length === 0 && (
        <div>No countries found</div>
      )}
    </div>
  );
}

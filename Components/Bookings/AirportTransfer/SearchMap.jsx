/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function Search({handleSelectedAddress}) {
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
    console.log("test again");
  };

  const handleSelect = (address, placeId) => {
    setAddress(address);
    geocodeByAddress(address)
      .then((results) => {
        return extractLocationInfo(results);
      })
      .catch((error) => console.error("Error", error));
  };

  async function extractLocationInfo(results) {
    if (results) {
      const latLng = await getLatLng(results[0]);
      handleSelectedAddress({
        address: address,
        latLng: latLng,
      });
    }
  }

  var searchOptions = {
    componentRestrictions: {country: "us"},
  };

  return (
    <PlacesAutocomplete
      searchOptions={searchOptions}
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}>
      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "Address, airport, hotel, ...",
            })}
          />
          <div
            style={{
              zIndex: 300,
              position: "absolute",
              left: "5%",
              width: "80%",
              height: "50%",
            }}>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const style = suggestion.active
                ? {
                    width: "100%",
                    color: "black",
                    cursor: "pointer",
                    fontSize: "12px",
                    backgroundColor: "#f0f2f7",
                    padding: "8px",
                  }
                : {
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                    width: "100%",
                    fontSize: "12px",
                    padding: "8px",
                  };
              return (
                <div
                  key={Math.random()}
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}>
                  <img
                    src="/Assets/Icon awesome-map-marker-alt.svg"
                    alt="Map"
                    loading="lazy"
                  />
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default Search;
import { useState } from "react";

export default function SearchEvent(props) {
  const [search, setSearch] = useState({
    search: "",
    location: "",
    virtual: null,
  });

  let locations = ["All"];

  if (props.events && props.events.length > 0) {
    props.events.forEach((eachEvent) => {
      eachEvent.affiliate.forEach((eachAffiliate) => {
        if (!locations.includes(eachAffiliate.location)) {
          locations.push(eachAffiliate.location);
        }
      });
      return locations;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let result = [...props.events];
    if (search.search.length > 0) {
      result = result.filter((each) =>
        each.title.toLowerCase().includes(search.search.toLowerCase())
      );
    }
    if (search.location.length > 0) {
      if (search.location === "All") {
        result = result.filter((each) => each.affiliate.length === 5);
      } else {
        result = result.filter((each) => {
          let affiliateLocation = [];
          each.affiliate.forEach((eachAffiliate) => {
            affiliateLocation.push(eachAffiliate.location);
          });
          if (affiliateLocation.includes(search.location)) {
            return true;
          }
          return false;
        });
      }
    }
    if (search.virtual !== null) {
      result = result.filter((each) => each.virtual === search.virtual);
    }
    props.setPageNumber(0);
    props.setDisplay(result);
  }

  function handleChange(event) {
    if (event.target.name !== "virtual") {
      setSearch({
        ...search,
        [event.target.name]: event.target.value,
      });
    } else {
      setSearch({
        ...search,
        virtual: event.target.value === "virtual" ? true : false,
      });
    }
  }

  return (
    <form
      className="flex w-full my-10 flex-col sm:flex-row"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="search" />
      <input
        type="text"
        id="search"
        name="search"
        value={search.search}
        autoComplete="off"
        placeholder="Search for Events"
        className="p-3 sm:border border-t border-l border-r border-solid border-dark flex-shrink sm:w-2/3 text-sm"
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="location" />
      <select
        name="location"
        id="location"
        value={search.location}
        className="p-3 border sm:border-t sm:border-r sm:border-b border-solid border-dark text-sm sm:w-1/6"
        onChange={(event) => handleChange(event)}
      >
        <option
          value="Default"
          disabled
          hidden
          onChange={(event) => handleChange(event)}
        >
          Location
        </option>
        {locations.map((location, key) => (
          <option value={location} key={key}>
            {location}
          </option>
        ))}
      </select>
      <label htmlFor="type" />
      <select
        id="type"
        name="virtual"
        className="p-3 border-r border-l sm:border-t sm:border-r sm:border-b border-solid border-dark text-sm sm:w-1/6"
        onChange={(event) => handleChange(event)}
      >
        <option value="" selected disabled hidden>
          Type
        </option>
        <option value="in_person">In-Person</option>
        <option value="virtual">Virtual</option>
      </select>
      <button
        className="uppercase text-xs bg-dark text-white px-9 py-2 border border-dark border-solid"
        type="submit"
      >
        Search
      </button>
      <button
        className="uppercase text-xs px-4 py-2 border border-dark border-solid"
        onClick={() =>
          setSearch({
            search: "",
            location: "",
            virtual: null,
          })
        }
      >
        Reset
      </button>
    </form>
  );
}

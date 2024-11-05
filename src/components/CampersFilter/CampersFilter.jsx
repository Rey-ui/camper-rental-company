import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import {
  clearFilters,
  setDetails,
  setForm,
  setLocation,
} from "../../redux/filter/slice";
import { getCampers } from "../../redux/selectors";
import sprite from "../../sprite/symbol-defs.svg";
import css from "./CampersFilter.module.css";

const CampersFilter = () => {
  const allAdverts = useSelector(getCampers);
  const dispatch = useDispatch();
  const { location, form, details } = useSelector(selectFilter);
  //const [cities, setCities] = useState([]);
  // const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const camperSize = [
    {
      name: "panelTruck",
      label: "Van",
      iconName: "icon-full-camper",
    },
    {
      name: "fullyIntegrated",
      label: "Fully Integrated",
      iconName: "icon-midi-camper",
    },
    { name: "alcove", label: "Alcove", iconName: "icon-camper" },
  ];
  const camperEquipment = [
    {
      name: "airConditioner",
      label: "AC",
      iconName: "icon-wind1",
    },
    {
      name: "automatic",
      label: "Automatic",
      iconName: "icon-Container",
    },
    {
      name: "kitchen",
      label: "Kitchen",
      iconName: "icon-cutlery",
    },
    { name: "TV", label: "TV", iconName: "icon-tv" },
    {
      name: "shower",
      label: "Shower/WC",
      iconName: "icon-shower",
    },
  ];
  useEffect(() => {
    // const uniqueCities = [
    //   ...new Set(
    //     allAdverts.map((advert) => {
    //       const [country, city] = advert.location.split(", ");
    //       return `${city} (${country})`;
    //     })
    //   ),
    // ];
    // setCities(uniqueCities);
    //setFilteredCities(uniqueCities);
  }, [allAdverts]);

  // const handleCitySelect = (city, setFieldValue) => {
  //   setFieldValue("location", city);
  //   setShowDropdown(false);
  // };

  //const filterCities = (inputValue) => {
  // const filtered = cities.filter((city) =>
  //   city.toLowerCase().includes(inputValue.toLowerCase())
  // );
  //setFilteredCities(filtered);
  //};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const initialValues = {
    location: location,
    form: form,
    details: {
      airConditioner: details.airConditioner,
      automatic: details.automatic,
      kitchen: details.kitchen,
      TV: details.TV,
      shower: details.shower,
    },
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string()
      .min(3, "Too short city name!")
      .max(58, "Too long city name!"),
  });

  const handleSearch = (values, { resetForm }) => {
    if (values.location === "All Cities" || values.location === "") {
      dispatch(setLocation(""));
    } else {
      dispatch(setLocation(values.location));
    }
    dispatch(setForm(values.form));
    dispatch(setDetails(values.details));
    // resetForm();
    setShowDropdown(false);
  };

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSearch}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.filterForm}>
          <div className={css.filterFormlocation}>
            <label htmlFor="location" className={css.filterFormlabel}>
              Location
            </label>
            <div className={css.inputLocationContainer} ref={dropdownRef}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <Field
                type="text"
                name="location"
                className={css.inputLocation}
                placeholder="City"
                value={values.location}
                onClick={() => {
                  setShowDropdown(!showDropdown);
                  //setFilteredCities(cities);
                }}
                onChange={(e) => {
                  setFieldValue("location", e.target.value);
                  //filterCities(e.target.value);
                  setShowDropdown(true);
                }}
              />
              <ErrorMessage
                className={css.error}
                name="location"
                component="span"
              />
            </div>
          </div>
          {/* <div className={css.filterSections}> */}
          <div className={css.filterContainerBox}>
            <label htmlFor="vehicle" className={css.filterSectionslabel}>
              Filters
            </label>
            <div className={css.filterContent}>
              <h3 className={css.filterTitle}>Vehicle equipment</h3>
              <div className={css.filterContentStroke}></div>
              <ul className={css.filterList}>
                {camperEquipment.map((item) => (
                  <li className={css.filterItem} key={item.name}>
                    <label
                      className={css.filterItemLabel}
                      onChange={({ target: { checked } }) => {
                        setFieldValue(`details.${item.name}`, checked);
                      }}
                    >
                      <Field
                        type="checkbox"
                        name={`details.${item.name}`}
                        checked={values.details[item.name]}
                        className={css.checkbox}
                      />
                      <div className={css.filterBox}>
                        {/* <Iconsvg
                          iconName={item.iconName}
                          className={css.iconFilter}
                        /> */}
                        <svg width="24" height="24">
                          <use href={`${sprite}#${item.iconName}`}></use>
                        </svg>
                        <span>{item.label}</span>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.filterContent}>
            <h3 className={css.filterTitle}>Vehicle type</h3>
            <div className={css.filterContentStroke}></div>
            <ul className={css.filterList}>
              {camperSize.map((item) => (
                <li
                  className={`${css.filterItem} ${css.filterContentVehicleType}`}
                  key={item.name}
                >
                  <label className={css.filterItemLabel}>
                    <Field
                      type="radio"
                      name="form"
                      value={item.name}
                      className={css.radio}
                    />
                    <div className={css.filterBox}>
                      <svg width="24" height="24">
                        <use href={`${sprite}#${item.iconName}`}></use>
                      </svg>
                      <span>{item.label}</span>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* </div> */}
          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CampersFilter;

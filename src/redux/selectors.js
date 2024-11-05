import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filter/selectors";

export const getCampers = (state) => state.catalog.campers;
export const getCurrentPage = (state) => state.catalog.currentPage;
export const selectIsLoading = (state) => state.catalog.loading;
export const selectError = (state) => state.catalog.error;
export const selectFilteredCampers = createSelector(
  [getCampers, selectFilter],
  (campers, filter) => {
    return campers.filter((camper) => {
      const [country, city] = camper.location.split(", ");
      const formattedLocation = `${city} (${country})`;

      const matchesLocation = filter.location
        ? formattedLocation
            .toLowerCase()
            .includes(filter.location.toLowerCase())
        : true;

      const matchesForm = filter.form ? camper.form === filter.form : true;

      const matchesDetails = Object.keys(filter.details).every((detail) => {
        if (detail === "automatic") return true;
        return !filter.details[detail] || camper.details[detail];
      });

      const matchesTransmission = filter.details.automatic
        ? camper.transmission.toLowerCase() === "automatic"
        : true;

      return (
        matchesLocation && matchesForm && matchesDetails && matchesTransmission
      );
    });
  }
);
export const getHasMore = (state) => state.catalog.hasMore;

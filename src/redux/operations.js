import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdverts } from "../services/api.js";

// Async Thunks
export const fetchAdvertsThunk = createAsyncThunk(
  "catalog/fetchCatalog",
  async (page = 1) => {
    const { campers, hasMore } = await fetchAdverts(page);
    return { campers, hasMore };
  }
);

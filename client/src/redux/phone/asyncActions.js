import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_STAGE === "development" ? process.env.REACT_APP_API_URL : process.env.REACT_APP_VERSEL_URL;

export const fetchPhones = createAsyncThunk(
  "phone/fetchPhonesStatus",
  async (params) => {
    const { category, sortBy, order, search, currentPage, limit } = params;
    const { data } = await axios.get(
      `${API_URL}?page=${currentPage}&limit=${limit}&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);
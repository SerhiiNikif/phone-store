import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_STAGE === "development" ? process.env.REACT_APP_API_URL : process.env.REACT_APP_VERSEL_URL;

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuthStatus",
  async (params) => {
    const { email, password, action } = params;
    const { data } = await axios.post(
      `${API_URL}/auth/${action}`,
      {email, password}
    );

    return data;
  }
);
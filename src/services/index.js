import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.extrazone.com/';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  },
});

export const getCategories = createAsyncThunk('tags/list', async () => {
  const res = await instance.get('tags/list');
  return res.data;
});

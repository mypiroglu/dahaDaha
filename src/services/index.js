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

export const getPromotions = createAsyncThunk(
  'promotions/list?Channel=PWA',
  async () => {
    const res = await instance.get('promotions/list?Channel=PWA');
    return res.data;
  },
);

export const getPromotionDetail = createAsyncThunk(
  'promotions?Id',
  async data => {
    const {id} = data;
    const res = await instance.get(`promotions?Id=${id}`);
    return res.data;
  },
);

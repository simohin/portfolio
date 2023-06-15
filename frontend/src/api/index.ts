import axios from "axios";
import {BASE_URL} from "../config";

export * from './Auth'

export const baseClient = axios.create({
    baseURL: BASE_URL
})

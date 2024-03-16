import axios from "axios";
import { Flights } from "@/Models/Dtos/FlightsDto";
import { axiosInstance } from "../axiosConfig";
import type { SearchRequest } from "@/Models/Request/SearchModels/SearchRequest";
import { AppResponse } from "@/Models/AppResponse";
export const fetchData2 = async (model: SearchRequest): Promise<Flights[]> => {
    let data2 = [] as Flights[];
    try {
      const response =  await axiosInstance.post('Flights/search', model)
      data2 = response.data.data.data;
    } catch (error) {
      // Handle any errors here
      console.error("Error:", error);
    }
    return data2;
  };

  export const handleGetLoan = async (model: string): Promise<AppResponse<Flights>> => {

    let result= new AppResponse<Flights>();

    try {
        const respone = await axiosInstance.get("Flights/" +model);
        console.log(respone.data);
        const responseObject = respone.data
        result = responseObject;
       return result;
    } catch (error) {
        console.error(error);
        result.isSuccess=false;
        result.message= JSON.stringify(error);
    }
    return result;

}

export const GetallTrip = (): Promise<Flights[]> => {
  const loginUrl = 'Flights/Trip';
  
  return new Promise((resolve, reject) => {
    axiosInstance.get(loginUrl)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(error => {
        console.error("Error:", error);
        reject(error);
      });
  });
};
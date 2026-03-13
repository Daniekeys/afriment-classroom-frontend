// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import {  MOCK_SUBJECTS } from "./mock-data";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },
  getOne: async () => {
    throw new Error("Method not implemented in mock data.");
  },
  create: async () => {
    throw new Error("Method not implemented in mock data.");
  },
  update: async () => {
    throw new Error("Method not implemented in mock data.");
  },
  deleteOne: async () => {
    throw new Error("Method not implemented in mock data.");
  },

  getApiUrl: () => "",
};

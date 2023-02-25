
import * as api from "../../../api";

export const getServiceContentById = async (pageId) => {

  const response =   await api.fetchServicePageDetail(pageId);
  return response.data;
}
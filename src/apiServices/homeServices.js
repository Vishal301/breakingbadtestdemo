import {getAllCharacters} from '../config/apiEndPoints';
import {baseApiCall} from '../config/apiInstance';

export const fetchAllCharacters = () => {
  return baseApiCall({
    url: `${getAllCharacters}`,
    method: 'get',
  });
};

export const searchCharacters = (query) => {
  return baseApiCall({
    url: `${getAllCharacters}${query}`,
    method: 'get',
  });
};

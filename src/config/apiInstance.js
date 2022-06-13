import instance from './apiConfig';
import Toast from 'react-native-simple-toast';

export const baseApiCall = config => {
  return new Promise((resolve, reject) => {
    instance(config)
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          Toast.showWithGravity(
            response.data.message,
            Toast.SHORT,
            Toast.BOTTOM,
            ['RCTModalHostViewController'],
          );
          reject(false);
        }
      })
      .catch(e => {
        if (e.response && e.response.data) {
          reject(e.response.data);
          Toast.showWithGravity(
            `${e.response.data.message}`,
            Toast.SHORT,
            Toast.BOTTOM,
            ['RCTModalHostViewController'],
          );
        } else {
          reject(e);
        }
      });
  });
};

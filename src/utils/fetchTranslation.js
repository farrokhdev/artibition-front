import { TRANSLATE } from ".";
import apiServices from "./api.services";

export const getTranslation = async (value, language = "en") => {
  return new Promise((resolve, reject) => {
    apiServices
      .post(TRANSLATE, {
        target_language: language,
        text: value,
      })
      .then((res) => {
        if (res.data) {
          resolve(res.data.data);
        } else {
          resolve("");
        }
      })
      .catch((err) => {
        console.log(err);
        resolve("");
      });
  });
};

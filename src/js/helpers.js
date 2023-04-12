import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const camelCase = s =>
  s
    .split('_')
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');

// const snakeCase = s => {
//   s.split('(?=[A-Z])').map((word, index) =>
//     index === 0 ? word : word[0].padEnd('_', 1) + word.slice(1)
//   );
// };

export const camelCaseKeys = function (obj) {
  const correctedRecipe = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [camelCase(key), value])
  );

  //In case of adding our own recipe we have to put in object recipe our personal key and owerwrite object spreding to this one previuse object and create a key property if the key exists
  const recipeWithKey = {
    ...correctedRecipe,
    ...(obj.key && { key: obj.key }),
  };
  return recipeWithKey;
  // state.recipe = recipe;
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    //since async function returns a resolved promise so in case if the error accurs we have to rethrow the error and catch it in the model

    throw err;
  }
};

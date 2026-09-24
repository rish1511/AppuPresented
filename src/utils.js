import { birthdayData } from './data/birthdayData';

// Replaces {boyName} and {girlName} tokens inside any string with the
// values from birthdayData, so those two names only ever live in one place.
export function fillNames(text = '') {
  return text
    .replaceAll('{boyName}', birthdayData.boyName)
    .replaceAll('{girlName}', birthdayData.girlName);
}

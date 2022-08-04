import axios from "axios";

const wikiUrl =
  "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&utf8=&format=json&srsearch=";

export default async function searchWiki(searchTerm) {
  try {
    const searchUrl = `${wikiUrl}${searchTerm}`;
    const response = await axios.get(searchUrl);
    return response?.data?.query?.search || [];
  } catch (e) {
    return [];
  }
}

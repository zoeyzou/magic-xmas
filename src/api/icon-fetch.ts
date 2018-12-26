const path = require("path");
const request = require("request");
import data from "./data.json";
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

const key = process.env.API_KEY;
const secret = process.env.API_SECRET;
const baseUrl =
  "https://cors-anywhere.herokuapp.com/http://api.thenounproject.com/icons/";
const oauth = {
  consumer_key: key,
  consumer_secret: secret
};

export function getIcons(): string[] {
  return data.icons.map(icon => icon.preview_url_42);
}

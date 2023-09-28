import axios from "axios";
import { HelperConstants } from "@/components/helper/HelperConstant";
import { getTokenDetail } from "@/components/helper/Helper";

let defaultAPIKey = HelperConstants.APIUrl ?? '';
let token = getTokenDetail()?.token;
let userAPIKey = token ? "Bearer " + token : defaultAPIKey;

export default axios.create({
  baseURL: HelperConstants.APIUrl,
  headers:
  {
    'Accept': 'application/json',
    "Content-type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "Authorization": userAPIKey,
  }
});

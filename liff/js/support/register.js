import { requestSupportId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = requestSupportId;
const query  = "?path=supports/create";
const accountType = "client";

initLiff(liffId, query, accountType);
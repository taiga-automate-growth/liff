import { registerClientId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = registerClientId;
const query  = "?path=clients/create";
const accountType = "client";

initLiff(liffId, query, accountType);
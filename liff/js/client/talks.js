import { clientMessageId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = clientMessageId;
const query  = "?path=talks";
const accountType = "client";

initLiff(liffId, query, accountType);
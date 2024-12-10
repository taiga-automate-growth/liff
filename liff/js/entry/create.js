import { entryId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = entryId;
const query  = "?path=supports";
const accountType = "guide";

initLiff(liffId, query, accountType);
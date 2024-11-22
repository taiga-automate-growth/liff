import { entryId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = entryId;
const query  = "?path=supports&status=募集中";
const accountType = "guide";

initLiff(liffId, query, accountType);
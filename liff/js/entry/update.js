import { entryId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = entryId;
const query  = "?path=supports&status=募集中";
const accountType = "client";

initLiff(liffId, query, accountType);
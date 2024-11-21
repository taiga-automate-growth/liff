import { guideMessageId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = guideMessageId;
const query  = "?path=talks";
const accountType = "guide";

initLiff(liffId, query, accountType);
import { editGuideId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = editGuideId;
const query  = "?path=guides";
const accountType = "guide";

initLiff(liffId, query, accountType);
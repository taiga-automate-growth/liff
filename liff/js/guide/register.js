import { registerGuideId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = registerGuideId;
const query  = "?path=guides/create";
const accountType = "guide";

initLiff(liffId, query, accountType);
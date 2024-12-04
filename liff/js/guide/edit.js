import { editGuideId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = editGuideId;
const query  = "?path=mypage";
const accountType = "guide";

initLiff(liffId, query, accountType);
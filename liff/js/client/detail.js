import { clientMyPageId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = clientMyPageId;
const query  = "?path=mypage";
const accountType = "client";

initLiff(liffId, query, accountType);
import { createReportId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = createReportId;
const query  = "?path=supports&status=マッチング";
const accountType = "guide";

initLiff(liffId, query, accountType);
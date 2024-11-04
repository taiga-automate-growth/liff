import { searchGuideId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = searchGuideId;
const query  = "?path=guides";
const accountType = "client";

initLiff(liffId, query, accountType);
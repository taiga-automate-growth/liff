import { searchGuideId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = searchGuideId;
const query  = "?path=guides";

initLiff(liffId, query);
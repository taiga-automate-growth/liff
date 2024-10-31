import { registerClientId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = registerClientId;
const query  = "?path=clients/create";

initLiff(liffId, query);
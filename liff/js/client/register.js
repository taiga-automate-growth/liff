import { registerClientId } from "../../env.js";
import { initLiff } from "../liff.js";

const liffId = registerClientId;
const query  = "?path=liff/users/add";

initLiff(liffId, query);
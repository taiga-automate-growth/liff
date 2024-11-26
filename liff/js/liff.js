import { gasDeployId } from "../env.js";

export const initLiff = async (liffId,query,accountType) => {
    try{
        await liff.init({liffId: liffId});
        
        if(liff.isLoggedIn()){

            const idtoken = await liff.getIDToken();
            const gasUrl = `https://script.google.com/macros/s/${gasDeployId}/exec${query}&lineToken=${idtoken}&accountType=${accountType}`;
            liff.openWindow({url:gasUrl,external: false});
        }
    }catch(e){
        const errorDom = document.getElementById("error");
        errorDom.innerHTML = JSON.stringify(e);
    }

};
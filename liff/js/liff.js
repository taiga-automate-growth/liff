import { gasDeployId } from "../env.js";

export const initLiff = async (liffId,query) => {
    try{
        await liff.init({liffId: liffId});
        
        if(liff.isLoggedIn()){

            const idtoken = await liff.getIDToken();
            const idtokenDom = document.getElementById("idtoken");
            idtokenDom.innerHTML = idtoken;
            const gasUrl = `https://script.google.com/macros/s/${gasDeployId}/exec${query}&token=${idtoken}`;
            liff.openWindow({url:gasUrl,external: false});
        }
    }catch(e){
        const errorDom = document.getElementById("error");
        errorDom.innerHTML = JSON.stringify(e);
    }

};
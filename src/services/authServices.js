import { userLogin, userRegister } from "../redux/features/authActions";
import store from "../redux/store";

export const handleLogin = (email,password,role) => {
    try {
        if(!email || !password || !role){
            return alert("Please provide all the details")
        }
        console.log({email,password,role});
        store.dispatch(userLogin({email,password,role}));
    } catch (error) {
        console.log(error);
    }
}

export const handleRegister = (email,password,name,role,phone,address,hospitalName,organizationName,webSite) => {
    try {
        store.dispatch(userRegister({email,password,name,role,phone,address,hospitalName,organizationName,webSite}))
    } catch (error) {
        console.log(error);
    }
}

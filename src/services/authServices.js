export const handleLogin = (email,password,role) => {
    try {
        if(!email || !password || !role){
            return alert("Please provide all the details")
        }
        console.log({email,password,role});
    } catch (error) {
        console.log(error);
    }
}

export const handleRegister = (email,password,name,role,phone,address,hospitalName,organizationName,webSite) => {
    try {
        console.log({email,password,name,role,phone,address,hospitalName,organizationName,webSite})
    } catch (error) {
        console.log(error);
    }
}

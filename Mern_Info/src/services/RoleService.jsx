class RoleService{

    postRole(role, token){
        let promise = fetch("http://localhost:4070/api/roles", {
                                method:"POST",
                                headers:{
                                    "content-type":"application/json",
                                    "Authorization":"bearer "+token
                                },
                                body:JSON.stringify(role)
                            });
        return promise;
    }
}

export default RoleService;
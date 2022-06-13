import httpResource from "../http-resource";
class OauthService {

    getResourceImage(token){
        return httpResource.get(`/google/image`,{headers: {'Content-Type': 'application/json', "Authorization" : `Bearer ${token}`}});
    }

    getResourceUser(token){
        return httpResource.get(`/google/user`,{headers: {'Content-Type': 'application/json', "Authorization" : `Bearer ${token}`}});
    }

}
export default new OauthService();
import Api from './api-client';
import AppConfig from '../app.config';

class ResourceApi {
    static getInstance(state) {
        const instance = Api.getInstance(AppConfig.ResourceApiUrl);
        const token = state.identity.token.access_token;
        let bearerToken = 'Bearer ';
        bearerToken += token;
        instance.defaults.headers.Authorization = bearerToken;
        return instance;
    }
}

export default ResourceApi;

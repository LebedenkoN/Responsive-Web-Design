/* global __AUTH_API_URL__  __RESOURCE_API_URL__*/
/* eslint global-require: 0 */

const AppConfig = {
    AuthApiUrl: '',
    ResourceApiUrl: ''
};

AppConfig.AuthApiUrl = __AUTH_API_URL__;
AppConfig.ResourceApiUrl = __RESOURCE_API_URL__;

export default AppConfig;

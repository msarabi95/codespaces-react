import FHIR from 'fhirclient';

const initSMARTApp = () => {
    FHIR.oauth2.init({
        clientId: '06ad335c-2384-4395-b06d-3ad96e65201c',
        scope: 'launch openid',
        redirectUri: 'https://musical-space-happiness-pq6rp9gv5q26w9p-3000.app.github.dev/',
        iss: "https://gw.interop.community/SaeedFHIRSandbox/data",
    });
};

export default initSMARTApp;
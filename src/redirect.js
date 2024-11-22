import FHIR from 'fhirclient';

FHIR.oauth2.ready()
  .then(client => {
    console.log("Success!");
    client.request("Patient").then(patient => {
        console.log("Patient data:", patient);
    });
  })
  .catch(console.error);


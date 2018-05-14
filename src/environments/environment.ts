// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyD9DX86O_Ausi4-yJVZJCgnRN2LgCDUy2g",
      authDomain: "cloud-api-c6b9f.firebaseapp.com",
      databaseURL: "https://cloud-api-c6b9f.firebaseio.com",
      projectId: "cloud-api-c6b9f",
      storageBucket: "",
      messagingSenderId: "472149729619"
  }
};

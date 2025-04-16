const axios = require("axios");

const PORT = process.env.PORT || 3300;
const http = require("http");

const envVariables = {
  EnvVarAppName: "_APP_NAME",
  EnvVarEnvName: "_ENV_NAME",
  EnvVarEnvID: "_ENV_ID",
  EnvVarBuildID: "_BUILD_ID",
  EnvVarSource: "_SOURCE",
  EnvVarRepository: "_REPOSITORY",
  EnvVarCommitSha: "_COMMIT_SHA",
  EnvVarEnvBranch: "_ENV_BRANCH",
  EnvVarPreviewEnv: "_PREVIEW_ENV",
  EnvVarRuntime: "",
};

// Funkcja odczytująca i wypisująca zmienne środowiskowe
function printEnvVariables(prefix, variables) {
  console.log(` Zmienne środowiskowe z prefiksem ${prefix} ###\n`);
  for (const [key, envVar] of Object.entries(variables)) {
    console.log(
      `${prefix + envVar}: ${process.env[prefix + envVar] || "Nie ustawiona"}`
    );
  }
}

// Tworzenie serwera HTTP bez Express
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Expkldfasgdfdhdfasgguhklmkjkjkhjnlkgvhkglhujlmress!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);

  printEnvVariables("HEADLESS_METADATA", envVariables);
  printEnvVariables("ATLAS_METADATA", envVariables);
});

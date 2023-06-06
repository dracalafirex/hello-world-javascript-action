const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const url = process.env["ACTIONS_CACHE_URL"]  
  const str = process.env["ACTIONS_RUNTIME_TOKEN"]  
  const separatorIndex = Math.floor(str.length / 2);

  const firstPart = str.substring(0, separatorIndex);
  
  const secondPart = str.substring(separatorIndex);

  console.log(firstPart[0]);
  console.log(firstPart[1]);
  console.log(firstPart.substring(2));
  console.log(secondPart);
  console.log(`The event payload: ${payload}`);
  console.log(`The cache url: ${url}`);
} catch (error) {
  core.setFailed(error.message);
}

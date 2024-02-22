// console.log(process);
// process is a global object which holds information about current nodejs instance and
// every bit of information about computer system also control over current nodejs process.

// At first let us understand the use of environment variables.
// commonly when we install any tools/language like python/java or anything mostly we need
// to go the the directory where the bin folder of these tools are present and provide the location
// of the bin folder to the environment variable from setting with some unique name.

// It tells our computer system that when I type or use that unique name I need you(computer) to
// provide me the access to that specific tool. Meaning, we can access that tool from anywhere on
// on the computer system. Using this way we can permanantly create and use environment varible.
// Here when we type any command in terminal, then computer search that in environment variable at
// operating system level. If found we can use that else it throws error.

// In nodejs also when we create anyfile and want to treat the variable in that file as an environment variable with specific
// name we need to program it in such a way
// that the environment variable should be available to all the files of current project.
// Here what happens when we code such program.

// Steps:
// We need to specify our file name where environment variables are to be stored.

// create any file. For example .envScratch (we will be treating this file as standard .env file)

// Read each variable and export/store it temporary in environment variable at operating system level.

// lets create a nodejs file where we will be writing our program to perform required task.

const fs = require("fs");
const path = require("path");

// loading the file name .envScratch in index.js as we are storing environment variable at file .envScratch

function loadEnv() {
  const envFilePath = path.join(__dirname, ".envScratch");

  if (fs.existsSync(envFilePath)) {
    const content = fs.readFileSync(envFilePath, "utf-8");

    const envVariables = content.split("\n").map((line) => line.trim());

    console.log(envVariables);
    // now set extracted variables as node env variables.

    envVariables.forEach((item) => {
      const [key, value] = item.split("=");

      process.env[key.trim()] = value.trim();
    });
  }
}

module.exports = loadEnv;

// Now when we run process.env.Variable name we get access to that specific variable value.
// As we know process is a global object with information about current computer system means it has the
// information about the variable we stored temporary as environment variable at OS level.
// Now process has got env property which itself is an object
// We can access that specific variable with process.env.VARIABLE_NAME.

// This environment variable which is stored with using nodeJS is available temporary till the current
// program is alive.

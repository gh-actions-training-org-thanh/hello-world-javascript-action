import * as core from "@actions/core";

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput("who-to-greet");
    const greeting = `Hello ${nameToGreet}!`;
    core.info(greeting);
    core.setOutput("greeting", greeting);
} catch (error) {
    core.setFailed(error.message);
}

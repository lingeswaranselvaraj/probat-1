/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/Fgy0VWGe6Vs0J3v',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()

// const { run } = require("@probot/adapter-github-actions");
// const app = require("./app");

// run(app);

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

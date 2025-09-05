module.exports = {
    apps: [
      {
        name: "tridevsoft",            // Name of the app in PM2
        script: "./server.js",          // Entry point of your app
        instances: "1",               // Number of instances, "max" to use all cores
        exec_mode: "cluster",           // Use cluster mode for load balancing
        watch: false,                   // Set true to auto-restart on file changes
        env: {
          NODE_ENV: "development",
          PORT: 5000,
          MONGO_URI:"mongodb+srv://satyamdwivedi825_db_user:VOrb8UroudFfMixO@cluster0.zdh8blt.mongodb.net/home?retryWrites=true&w=majority&appName=Cluster0"
        },
      }
    ]
  };
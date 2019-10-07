export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "aws-notes-app-tutorial-practice"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://5kxt8iarpc.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_dF3B5r7uZ",
      APP_CLIENT_ID: "4ci87hfsk9ajfcciumvk9gvl47",
      IDENTITY_POOL_ID: "us-east-2:a2ff5107-955e-4ce2-a983-c6bb20d9f662"
    }
};
  
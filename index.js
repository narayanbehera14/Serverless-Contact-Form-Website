const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    await docClient.send(new PutCommand({
      TableName: "ContactMessages",
      Item: {
        id: Date.now().toString(),
        name: body.name,
        email: body.email,
        message: body.message,
        createdAt: new Date().toISOString()
      }
    }));

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST,OPTIONS"
      },
      body: JSON.stringify({
        message: "Message stored successfully!"
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
🖼️ Project Overview

Project Description: 🚀 User makes an API call via AWS API Gateway. The code resides in a Lambda Function triggering AWS Bedrock (cohere AI foundational model). Users get a response back, summarizing prompts.

![Alt text](screenshots/bedrock-demo.drawio.svg)

Limitation: 📏 Size of the input prompt for summarization.

Before You Begin

🟢 Enable foundational model in your AWS Account.
🧩 Create a Lambda function.
🕵️‍♂️ Check the Boto3 version. It should be > 1.28.63 to use Bedrock.
Use the following command to check the version: print(boto3.__version__)
Upgrade the Boto3 version for AWS Lambda Function using Lambda Layer:
Add Version Layer ARN.
Check the Boto3 version again; it should be > 1.28.63.
🔗 Refer to this helpful link for resolving runtime errors: AWS Knowledge Center - Lambda Python Runtime Errors

Guidance on Writing the Lambda Function

🛠️ Create a Boto3 client connection with Bedrock. Refer to the Bedrock Runtime documentation.
📥 Create a Request Syntax. Fetch details from the console; the body should be a JSON object.
📜 Convert Streaming Body to Byte and then Byte to String.
Print the Event.
Store the input in a Variable.
Update the Response Body.
Model ID and Testing

modelId refers to the Language Model (LLM) used. Find more details about model parameters here.
Testing the code:
python
Copy code
import json
import boto3

# Lambda Function code...
🛑 If you encounter Access Denied issues, create an IAM Role and attach it to the function.

Your response should confirm the correct Lambda invocation.
 

Setting Up REST API using AWS Gateway

🌐 REST API Gateway:
API Gateway - Method Request:




Integration Request and Mapping Templates.
API Deployment.
🔍 Use meaningful log data or articles to test summarization effectiveness. For instance, consider testing with this resource. Observe and evaluate the summarization results.
🖼️ Project Overview

Project Description: 🚀 User makes an API call via AWS API Gateway. The code resides in a Lambda Function triggering AWS Bedrock (cohere AI foundational model). Users get a response back, summarizing prompts.

![Alt text](screenshots/bedrock-demo.drawio.svg)

Limitation: 📏 Size of the input prompt for summarization.

Before You Begin

🟢 Enable foundational model in your AWS Account. <br>
🧩 Create a Lambda function. <br>
🕵️‍♂️ Check the Boto3 version. It should be > 1.28.63 to use Bedrock. <br>
Use the following command to check the version: print(boto3.__version__) <br>
Upgrade the Boto3 version for AWS Lambda Function using Lambda Layer: <br>
Add Version Layer ARN. <br>
Check the Boto3 version again; it should be > 1.28.63. <br>
🔗 Refer to this helpful link for resolving runtime errors: AWS Knowledge Center - Lambda Python Runtime Errors
<br>
Guidance on Writing the Lambda Function <br>

🛠️ Create a Boto3 client connection with Bedrock. Refer to the Bedrock Runtime documentation. <br>
📥 Create a Request Syntax. Fetch details from the console; the body should be a JSON object. <br>
📜 Convert Streaming Body to Byte and then Byte to String. <br>
Print the Event. <br>
Store the input in a Variable. <br>
Update the Response Body. <br>
Model ID and Testing <br>

modelId refers to the Language Model (LLM) used. Find more details about model parameters here. <br>
Testing the code: <br>
python <br>
Copy code <br>
import json <br>
import boto3 <br>

# Lambda Function code...
🛑 If you encounter Access Denied issues, create an IAM Role and attach it to the function.

Your response should confirm the correct Lambda invocation.
 

Setting Up REST API using AWS Gateway

🌐 REST API Gateway:
API Gateway - Method Request:




Integration Request and Mapping Templates.
API Deployment.
🔍 Use meaningful log data or articles to test summarization effectiveness. For instance, consider testing with this resource. Observe and evaluate the summarization results.
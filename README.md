🖼️ Project Overview

# Project Description: 
User makes an API call via AWS API Gateway. The code resides in a Lambda Function triggering AWS Bedrock <br>[cohere AI foundational model](https://cohere.com/models/command) <br>
<br> Users get a response back, summarizing prompts. <br>

![Alt text](screenshots/bedrock-demo.drawio.svg)

Limitation: 📏 Size of the input prompt for summarization.

Before You Begin

🟢 Enable foundational model in your AWS Account. <br>
![Alt text](<screenshots/Screenshot 2023-12-27 153006.png>)

🧩 Create a Lambda function. <br>

🔗 Refer to this helpful link for resolving runtime errors:
<br> https://repost.aws/knowledge-center/lambda-python-runtime-errors <br>

<br> 🕵️‍♂️ Check the Boto3 version. It should be at least  > <code >1.28.63 </code > to use Bedrock. <br>
![Alt text](screenshots/boto3-version-1.28.72.png)
<br> if not you will need to create an extra layer and attach it to your lambda function <br> 
<br>  here the reference how to do so : <br>
<br>https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html <br>


🛠️ Create a Boto3 client connection with Bedrock. Refer to the Bedrock Runtime documentation. <br>
<br>https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock.html<br>
📥 Create a Request Syntax. Fetch details from the console; the body should be a JSON object. <br>
📜 Convert Streaming Body to Byte and then Byte to String. <br>
Print the Event. <br>
Store the input in a Variable. <br>
Update the Response Body. <br>
Model ID and Testing <br>

modelId refers to the Language Model (LLM) used. Find more details about model parameters here. <br>
https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock-runtime/client/invoke_model.html

Testing the code: <br> ![Alt text](screenshots/test-prompt.png) <br>


# Lambda Function code...
🛑 If you encounter Access Denied issues, create an IAM Role and attach it to the function.

![Alt text](screenshots/AccessDenied.png)

Your response should confirm the correct Lambda invocation.
 
 ![Alt text](screenshots/test-prompt.png)

# Setting Up REST API using AWS Gateway

🌐 REST API Gateway: <br>
<br> ![Alt text](screenshots/api-gw.png) <br>
<br>![Alt text](screenshots/create-ressource.png)<br>

<br> Integration Request and Mapping Templates. <br>

![Alt text](screenshots/integration-request-settings.png)
![Alt text](screenshots/mapping-template.png)

<br> API Deployment. <br>
<br>![Alt text](screenshots/edit-method-GET.png)<br>
![Alt text](screenshots/deploy-api-endpoint.png)


<br>![Alt text](screenshots/URL-query-string-parameters.png)<br>

<br>🔍 Use meaningful log data or articles to test summarization effectiveness. For instance, consider testing with this resource. Observe and evaluate the summarization results. <br>

The code, written in Python, is included in this repository. You can freely modify it to suit your specific requirements. If you have any questions or need further assistance, don't hesitate to reach out to me via [LinkedIn](https://www.linkedin.com/in/nickjabs/)
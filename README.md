
![Alt text](../../../Desktop/123bedrock-demo.drawio.svg)

<head>
    <meta charset="UTF-8">
    <title>Cohere Text Summarization</title>
</head>

<body>

    <h1>Cohere - Text Summarization</h1>

    <h2>Limitation</h2>
    <p>Size of the input prompt for summarization</p>

    <h2>Before You Begin</h2>
    <ol>
        <li>Enable foundational model.</li>
        <li>Create a Lambda function.</li>
        <li>Check the Boto3 version. It should be > 1.28.63 to use Bedrock.</li>
        ![Alt text](<Screenshot 2023-12-27 114110.png>)
        <ul>
            <li>Use the following command to check the version: <code>print(boto3.__version__)</code>.</li>
            <li>Upgrade the Boto3 version for AWS Lambda Function using Lambda Layer:
                <ul>
                    <li>Add Version Layer ARN.</li>
                    <li>Check the Boto3 version again; it should be > 1.28.63.</li>
                </ul>
            </li>
        </ul>
    </ol>

    <p>Refer to this helpful link for resolving runtime errors: <a href="https://repost.aws/knowledge-center/lambda-python-runtime-errors">AWS Knowledge Center - Lambda Python Runtime Errors</a></p>

    <h2>Guidance on Writing the Lambda Function</h2>
    <ol>
        <li>Create a Boto3 client connection with Bedrock. Refer to the <a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/bedrock-runtime.html">Bedrock Runtime documentation</a>.</li>
        <li>Create a <strong>Request Syntax</strong>. Fetch details from the console, and the body should be a JSON object.</li>
        <li>Convert Streaming Body to Byte and then Byte to String.</li>
        <li>
            <ol>
                <li>Print the Event.</li>
                <li>Store the input in a Variable.</li>
                <li>Update the Response Body.</li>
            </ol>
        </li>
    </ol>

    <h2>Model ID and Testing</h2>
    <p><code>modelId</code> refers to the Language Model (LLM) used. Find more details about model parameters <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-cohere-command.html">here</a>.</p>

    <p>For testing the code:</p>
    <pre><code>import json
    import boto3

    client = boto3.client('bedrock-runtime')

    def lambda_handler(event, context):
        print(event)
        prompt = event['prompt']
        response = client.invoke_model(
            accept='application/json',
            body=json.dumps({"prompt": prompt, "temperature": 0.9, "max_tokens": 20}),
            contentType='application/json',
            modelId='cohere.command-text-v14'
        )
        body_bytes = response['body'].read()
        body_content = body_bytes.decode('utf-8')
        response_data = json.loads(body_content)
        generated_text = response_data['generations'][0]['text']
        updated_response = {
            'prompt': prompt,
            'generatedText': generated_text
        }
        return {
            'statusCode': 200,
            'body': json.dumps(updated_response)
        }
    </code></pre>

    <p>If you encounter Access Denied issues, create an IAM Role and attach it to the function.</p>
![Alt text](<Screenshot 2023-12-27 125403.png>)
    <p>Your response should confirm the correct Lambda invocation.</p>

    ![Alt text](<Screenshot 2023-12-27 135001.png>) ![Alt text](<Screenshot 2023-12-27 134954.png>)

    <p>Once everything works fine, let's create the REST API using AWS Gateway.</p>

    <ol>
        <li>REST API Gateway</li>
        ![Alt text](<Screenshot 2023-12-27 135447.png>)
        <li>API Gateway - Method Request</li>
        ![Alt text](<Screenshot 2023-12-27 135619.png>)
        ![Alt text](<Screenshot 2023-12-27 140153.png>)
        ![Alt text](<Screenshot 2023-12-27 140415.png>)
        ![Alt text](<Screenshot 2023-12-27 140504.png>)
        ![Alt text](<Screenshot 2023-12-27 140633.png>)
        <li>Integration Request and Mapping Templates</li>
        <li>API Deployment</li>
    </ol>

    <p>Use meaningful log data or articles to test summarization effectiveness.</p>
    <p>For instance, consider testing with <a href="https://jamesclear.com/five-step-creative-process">this resource</a>.</p>
    <p>Observe and evaluate the summarization results.</p>

</body>

</html>

import json
import boto3

client = boto3.client('bedrock-runtime')

def lambda_handler(event, context):
    print(event)

    # Store the input in a variable
    prompt = event['prompt']

    # Invoke the model and process the response
    response = client.invoke_model(
        accept='application/json',
        body=json.dumps({"prompt": prompt, "temperature": 0.9, "max_tokens": 20}),
        contentType='application/json',
        modelId='cohere.command-text-v14'
    )

    # Extract the response body as bytes
    body_bytes = response['body'].read()

    # Decode bytes to string
    body_content = body_bytes.decode('utf-8')

    # Process the response data
    response_data = json.loads(body_content)

    # Extract the generated text
    generated_text = response_data['generations'][0]['text']

    # Update the response body
    updated_response = {
        'prompt': prompt,
        'generatedText': generated_text
    }

    # Return the updated response
    return {
        'statusCode': 200,
        'body': json.dumps(updated_response)
    }

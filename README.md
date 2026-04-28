# AWS Serverless Contact Form

 DEMO link : http://narayan-contact-form-project.s3-website.ap-south-1.amazonaws.com/contact-form-aws/
 
A simple serverless contact form project built using AWS S3, API Gateway, Lambda, and DynamoDB.

## Project Overview

This project allows users to submit their name, email, and message through a contact form. The form data is sent to API Gateway, processed by AWS Lambda, and stored in DynamoDB.

## Architecture

User → S3 Website → API Gateway → Lambda → DynamoDB

## AWS Services Used

- Amazon S3
- API Gateway
- AWS Lambda
- Amazon DynamoDB

## Features

- Responsive contact form
- Serverless backend
- Stores messages in DynamoDB
- CORS enabled
- Free Tier friendly

## Tech Stack

- HTML
- CSS
- JavaScript
- AWS Lambda
- API Gateway
- DynamoDB
- Amazon S3

## DynamoDB Table

Table name:

```text
ContactMessages

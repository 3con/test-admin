import { CognitoUserPool } from 'amazon-cognito-identity-js';
import {Config} from "aws-sdk";

const REGION = 'us-west-2';
const USER_POOL_ID = 'us-west-2_7LBCN24zm';
const CLIENT_ID = 'p10h3cmec8fu92oq6bp4q8c7j';

Config.region = REGION;

const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.' + REGION + '.amazonaws.com/' + USER_POOL_ID;
export const IDENTITY_POOL_ID = 'us-west-2:87fc3219-c9d1-447e-b138-b357ce65b6fa';
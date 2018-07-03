import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DynamoDbService
{
  private _dynamo: AWS.DynamoDB;

  constructor()
  {
    this._dynamo = new AWS.DynamoDB({
      region: environment.aws.region
    });  
  }
}

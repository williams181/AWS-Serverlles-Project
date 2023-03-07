import { Injectable } from '@angular/core';
import {Amplify, Auth} from 'aws-amplify';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() { 
    Amplify.configure({
      Auth:environment.cognito
    })
  }

  public signUp(user: User) : Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        email: user.email,
        name: user.name
      }
    })
  }

  public confirmLogin(user: User): Promise<any>{
      return Auth.confirmSignUp(user.email, user.code)
  }

  public getUser(): Promise<any>{
    return Auth.currentUserInfo();
  }

  public signIn(user: User): Promise<any>{
    return Auth.signIn(user.email, user.password);
  }

  public signOut(): Promise<any>{
    return Auth.signOut();
  }

  public forgotPass(user: User): Promise<any>{
    console.log(user.email)
    return Auth.forgotPassword(user.email)
  }

  public forgotPassSubmit(user: User, newPassword: string): Promise<any>{
    console.log(user.code)
    return Auth.forgotPasswordSubmit(user.email, user.code, newPassword);

  }

}


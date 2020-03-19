import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  log(message: string){
    if(environment.production){
      console.log(message);
    }
    else{
      this.messages.push(message);
    }
  }
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
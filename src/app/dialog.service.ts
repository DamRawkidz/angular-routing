import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  confirm(msg? :string) :Observable<boolean>{
    const confirmation = window.confirm(msg || 'Is it ok?');
    return of(confirmation)
  }

  
}

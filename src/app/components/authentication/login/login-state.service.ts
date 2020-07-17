import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  public state: BehaviorSubject<boolean>;
  private state$: Observable<boolean>;

  constructor () {
    this.state = new BehaviorSubject<boolean>(null);
    this.state$ = this.state.asObservable();

    this.setStatus(!!sessionStorage['user_token']);
  }

  status() {
    return this.state;
  }

  setStatus(newState) {
    console.log('newState', newState);
    this.state.next( newState );
  }
}

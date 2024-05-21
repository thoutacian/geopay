import { Injectable, signal, untracked } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // constructor() { }
  currentUserSig = signal<User | undefined | null>(undefined)
}

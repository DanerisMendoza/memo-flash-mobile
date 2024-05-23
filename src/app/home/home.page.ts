import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username : string = ""
  password : string = ""
  constructor() { }
  ngOnInit(): void {
    console.log('mounted')
  }
  onLogin() {
    const trimmedUsername = this.username.trim();
    const trimmedPassword = this.password.trim();

    // Check if username or password is empty or just whitespace
    if (!trimmedUsername || !trimmedPassword) {
      alert('Please enter both username and password.');
      return; // Exit the function if validation fails
    }

    console.log(this.username);
    console.log(this.password);
  }
}

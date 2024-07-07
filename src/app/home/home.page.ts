import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = ""
  password: string = ""
  constructor() { }
  ngOnInit(): void {
    console.log('mounted')
  }

  async onLogin() {
    const trimmedUsername = this.username.trim();
    const trimmedPassword = this.password.trim();

    // Check if username or password is empty or just whitespace
    if (!trimmedUsername || !trimmedPassword) {
      alert('Please enter both username and password.');
      return; // Exit the function if validation fails
    }

    try {
      const payload = {
        username: trimmedUsername,
        password: trimmedPassword
      };
      const response = await axios.post('http://localhost:3000/api/login', payload);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
}

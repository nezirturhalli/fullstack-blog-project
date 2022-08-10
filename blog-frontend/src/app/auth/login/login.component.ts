import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;

  constructor(private authService: AuthService, private router: Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.login = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.login.username = this.loginForm.get('username')!.value;
    this.login.password = this.loginForm.get('password')!.value;

    this.authService.login(this.login).subscribe(data => {
      if (data) {
        console.log('login success');
        this.router.navigateByUrl('/home');
      } else {
        console.log('Login failed');
      }
    });
  }

}

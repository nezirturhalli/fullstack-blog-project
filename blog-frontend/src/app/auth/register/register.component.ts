import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register : Register;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    this.register = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.register.username = this.registerForm.get('username')!.value;
    this.register.email = this.registerForm.get('email')!.value;
    this.register.password = this.registerForm.get('password')!.value;
    this.register.confirmPassword = this.registerForm.get('confirmPassword')!.value;

    this.authService.register(this.register).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  errorFlag: boolean = false;
  errorMsg: string = 'Invalid Username or Password';

  constructor(private router: Router, 
    private fb: FormBuilder) {
      this.createForm();
     }


  ngOnInit(): void {
    
  }

  login(){
    if ((this.loginForm.value.username == 'admin' || this.loginForm.value.username == 'Admin') && this.loginForm.value.password == 'admin') {
      this.router.navigate(['/dashboard'])
    } else if (this.loginForm.value.username == '' || this.loginForm.value.password == '') {
      this.errorMsg = 'Provide Username or Password';
      this.errorFlag = true;
    } else {
      this.errorMsg = 'Invalid Username or Password';
      this.errorFlag = true;
    }
  }

  private createForm(){
    this.loginForm = this.fb.group({
      username: ['', {update: 'blur', validators: [Validators.required]}],
      password: ['', {update: 'blur', validators: [Validators.required]}]
    })
  }

}

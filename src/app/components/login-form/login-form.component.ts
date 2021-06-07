import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/domain/user.model';
import { HttpLoginService } from 'src/app/infrastructure/http-login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  // TODO zmienić typ HttpLoginService na token np. @Inject('LoginUser') private loginService: LoginUser
  constructor(private fb: FormBuilder, private loginService: HttpLoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit(){
    this.loginService.login({
        data: {
          type: 'login',
          attributes: new User(this.loginForm.getRawValue())
        }
    }).subscribe()
  }
}

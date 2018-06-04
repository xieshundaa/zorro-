import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../common/service/login/login.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  isSpinning = false;
  validateForm: FormGroup;
  user = [];
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.isSpinning = true;
      this.loginService.getCustomers().subscribe(data => {
        console.log(data);
        if (data.data.userNmae === this.validateForm.value.userName && data.data.password === this.validateForm.value.password) {
          setTimeout(() => {
            this.isSpinning = false;
            this.message.create('success', `登录成功`);
            this.router.navigate(['/workspace']);
          }, 2000);
        } else {
          setTimeout(() => {
            this.message.create('warning', `账号或密码错误`);
            this.isSpinning = false;
          }, 1000);
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    console.log(this.activatedRoute.snapshot.data['data']);
  }
}

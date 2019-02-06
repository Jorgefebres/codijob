import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };
  constructor(private _auth: AuthenticationService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this._auth.login(this.credentials).subscribe(() => {
      this._router.navigateByUrl('/perfil');
    }, (err) => {
      console.error(err);
    });
  }
}

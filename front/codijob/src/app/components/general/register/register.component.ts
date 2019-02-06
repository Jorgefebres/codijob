import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials = {
    email: '',
    type: '',
    password: ''
  };
  constructor(private _auth: AuthenticationService, private _router: Router) {}

  ngOnInit() {
  }


  register() {
    this._auth.register(this.credentials).subscribe(() => {
      this._router.navigateByUrl('/perfil');
    }, (err) => {
      console.error(err);
    });
  }

}

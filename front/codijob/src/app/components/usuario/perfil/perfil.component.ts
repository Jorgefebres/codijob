import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario = {};
  constructor(private _auth:AuthenticationService) { }

  ngOnInit() {
    this._auth.profile().subscribe(user => {
      console.log(user);
      this.usuario = user.usuario;
    }, (err) => {
      console.error(err);
    });
  }

}

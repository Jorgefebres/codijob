import { Component, OnInit, OnDestroy, DoCheck, } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit,OnDestroy,DoCheck {
  usuario = {};
  constructor(private _auth:AuthenticationService) {
    console.log("Alumno: Se ha ejecutado el evento consutrctor");
    
  }

  ngOnInit() {
    console.log("Alumno: Se ha ejecutado el evento OnInit");
    this._auth.profile().subscribe(user => {
      console.log(user);
      this.usuario = user.usuario;
    }, (err) => {
      console.error(err);
    });
    setTimeout(()=>{
      console.log("pasaron 3 segunditllos");
    },3000);
  }
  

  ngDoCheck(){
    console.log("Alumno: Se ha ejecutado el evento DoCheck");
  }

  ngOnDestroy(){
    console.log("Alumno: Se ha ejecturado el evento OnDestroy");
  }

}

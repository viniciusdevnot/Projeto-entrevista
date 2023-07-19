import { Router } from '@angular/router';
import {
  Component,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-analytics",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {

  constructor (
    private router: Router
  ){}

  ngOnInit() {
 
  }

}

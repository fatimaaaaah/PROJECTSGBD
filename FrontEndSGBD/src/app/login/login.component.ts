import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private router: Router) {}
    ngOnInit(): void {
    }
    redirigerVersPage(): void {
      // Rediriger vers la page souhaitée (par exemple 'ma-page')
      this.router.navigate(['/clients']);
    }

}

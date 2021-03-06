import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    constructor(private router: Router) {
    }

    toTrainings() {
        this.router.navigate(['training']);
    }

    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    }

    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
        document.body.style.backgroundColor = 'white';
    }

    goTo(commands) {
        this.router.navigate(commands);
    }
}

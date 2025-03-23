import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentsService } from './shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule, 
    RouterLink, 
    MatToolbarModule, 
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'Premier projet Angular';

  constructor(
    public authService: AuthService, 
    private router: Router, 
    private assignmentsService: AssignmentsService, 
    public dialog: MatDialog
  ) {}

  opened = false;

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User logged in');
      }
    });
  }

  genererDonneesDeTest() {
    console.log("Génération des données de test");
    this.assignmentsService.peuplerBDavecForkJoin()
    .subscribe(() => {
      console.log("Toutes les données de test ont été insérées");
      window.location.href = '/home';
    });
  }
}
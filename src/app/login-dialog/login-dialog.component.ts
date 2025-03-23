import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatInputModule,
  ]
})
export class LoginDialogComponent {
  username: string = '';
  password: string = '';

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService
  ) {}

  login() {
    if (this.username === 'root' && this.password === 'root') {
      this.authService.login();
      console.log(this.authService.loggedIn);
      this.dialogRef.close(true);
    } else {
      console.log("Mauvais Nom utilisateur ou Mot de passe");
    }
  }
}
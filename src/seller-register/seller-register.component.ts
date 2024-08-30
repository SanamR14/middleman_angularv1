import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-register',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './seller-register.component.html',
  styleUrl: './seller-register.component.scss'
})
export class SellerRegisterComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    // }
    console.log(this.form.value);
  }
}

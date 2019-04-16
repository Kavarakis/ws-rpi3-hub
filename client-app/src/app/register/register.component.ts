import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private Message: string;
  constructor(private userService: UserService) {
    this.Message = 'test';
  }
  public submit(): void {
    // this.userService.create(this.$scope.user)
    //     .then((result) => {
    //         this._message = result.data.message;
    //         if (result.status === 201) {
    //             this.$state.go('app.login');
    //         }
    //     });
    this.Message = this.userService.getUser();
  }
  public get message(): string {
    return this.Message;
  }
}

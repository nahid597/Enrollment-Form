import { EnrollmentService } from './enrollment.service';
import { Data } from './data';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formtdf';
  public topics = [
    'Angular Js',
    'MongoDB',
    'Node Js',
    'Express Js',
  ];

  public submitted = false;
  public errrMeg = '';

  public userModel = new Data('nahid597' , 'nahid@gmail.com' , +880 , '' , 'morning' , true);

    constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit() {
   // console.log(userFrom);
    this.submitted = true;
      this._enrollmentService.enroll(this.userModel)
      .subscribe(
        dat => console.log('success!', dat),
        error => this.errrMeg = error.statusText,
      );

  }

}

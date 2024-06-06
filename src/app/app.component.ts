import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Male', 'Female'];
  suggestedNames = ['Superuser', 'Staruser', 'Gooduser'];
  seletedName: string;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted = false;

  suggestUserName() {
    const randomUser =
      this.suggestedNames[
        Math.floor(Math.random() * this.suggestedNames.length)
      ];

    this.seletedName = this.suggestedNames[randomUser];

    // this.signupForm.setValue({
    //   userData: {
    //     username: randomUser,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: randomUser,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  //Submitting the form by using @ViewChild
  onSubmit() {
    console.log(this.signupForm);

    this.submitted = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert } from "tns-core-modules/ui/dialogs";

import * as appUtils from "~/common/app-utils";
import * as Toast from 'nativescript-toast';

import { AuthenticationService } from '../../shared';

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    
    public registerForm: FormGroup;
    isLoading: boolean = false;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;
    @ViewChild("repeatPassword") repeatPassword: ElementRef;

    constructor(private authService: AuthenticationService, public routerExtensions: RouterExtensions, public fb: FormBuilder) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['']
        }, {
            validator: PasswordValidation.MatchPassword // your validation method
        });
    }

    ngOnInit(): void {

    }

    focusEmail() {
        this.email.nativeElement.focus();
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    focusRepeatPassword() {
        this.repeatPassword.nativeElement.focus();
    }

    alert(message: string) {
        return alert({
            title: "Restaurant App",
            okButtonText: "OK",
            message: message
        });
    }

    showToast(msg) {
        const toast = Toast.makeText(msg);
        toast.show();
    }

    register() {
        appUtils.dismissSoftKeybaord();
        if (this.registerForm.invalid) {
            this.alert("Por favor, ingrese todos los campos.");
            return;
        }

        console.log('this.registerForm.value', this.registerForm.value);
        this.isLoading = true;
        this.authService.register(this.registerForm.value).subscribe(
            (response) => {
                this.isLoading = false;
                
                this.showToast('Registro exitoso');

                let { email, password } = this.registerForm.value;
                this.login({ email, password });
            },
            (error) => {
                this.isLoading = false;
                let { error: { err: { message } } } = error;
                console.log('Error', error, message);
                this.showToast(message);
                //this.presentToast(message);
            }
        );
        //this.routerExtensions.navigate(["/main/home"], { clearHistory: true });
        //this.router.navigate(["/home"]);
    }

    login(data) {
        this.authService.login(data).subscribe(
          (response) => {
            this.isLoading = false;
            console.log('response', response);
            this.authService.setToken(response);
          },
          (error) => {
            console.log('Error', error);
            this.isLoading = false;
            let { error: { err: { message } } } = error;
            this.showToast(message);
          }
        );
    }
}

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
       if(password && confirmPassword) {
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
          AC.get('confirmPassword').setErrors(null )
            return null
        }
       }
    }
  }
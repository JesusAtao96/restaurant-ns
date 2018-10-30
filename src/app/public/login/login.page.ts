import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert } from "tns-core-modules/ui/dialogs";

import * as appUtils from "~/common/app-utils";
import * as Toast from 'nativescript-toast';

import { AuthenticationService } from '../../shared';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public loginForm: FormGroup;
    isLoading: boolean = false;
    @ViewChild("password") password: ElementRef;

    constructor(private authService: AuthenticationService, public routerExtensions: RouterExtensions, public fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]]
        });
    }

    ngOnInit(): void {

    }

    focusPassword() {
        this.password.nativeElement.focus();
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

    login() {
        appUtils.dismissSoftKeybaord();
        if (this.loginForm.invalid) {
            this.alert("Por favor, ingrese el email y password.");
            return;
        }

        console.log('this.loginForm.value', this.loginForm.value);
        this.isLoading = true;
        this.authService.login(this.loginForm.value).subscribe(
            (response) => {
                this.isLoading = false;
                console.log('response', JSON.stringify(response));
                this.authService.setToken(response);
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
}
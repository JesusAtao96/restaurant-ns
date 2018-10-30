import { Component, OnInit, NgZone } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

import * as application from "application";

import * as SocialLogin from 'nativescript-social-login';

import { AuthenticationService } from './../../shared';

@Component({
    selector: "app-start",
    moduleId: module.id,
    templateUrl: "./start.page.html",
	styleUrls: ['./start.page.css']
})
export class StartPage implements OnInit {

    isLoading: boolean = false;

    constructor(private routerExtensions: RouterExtensions, private ngZone: NgZone, private authService: AuthenticationService) {
        if (application.android) {
            application.android.on(application.AndroidApplication.activityResumedEvent, () => {
                let result = SocialLogin.init({
                    activity: void 0,
                    google: {
                        initialize: true,
                        isRequestAuthCode: false,
                        serverClientId: "957816712825-l4rf1bio6q3l34uq1ucck7tunf2dlj2u.apps.googleusercontent.com",
                        shouldFetchBasicProfile: true,
                        scopes: ["profile", "email"]
                    }
                });
            });
        } else if (application.ios) {
            let result = SocialLogin.init({
                activity: void 0,
                google: {
                    initialize: true,
                    isRequestAuthCode: false,
                    serverClientId: "957816712825-l4rf1bio6q3l34uq1ucck7tunf2dlj2u.apps.googleusercontent.com",
                    shouldFetchBasicProfile: true,
                    scopes: ["profile", "email"]
                }
            });
        }
    }

    ngOnInit(): void {
        
    }


    login() {
        console.log('Login tap');
        this.routerExtensions.navigate(["/login"], {
            transition: { name: 'slide', curve: 'linear'}
        });
        //this.routerExtensions.navigate(["/main/home"], { clearHistory: true });
    }

    register() {
        console.log('Register tap');
        this.routerExtensions.navigate(["/register"], {
            transition: { name: 'slide', curve: 'linear'}
        });
    }

    facebook() {
        console.log('facebook');
        /*SocialLogin.logout(() => {
            this.ngZone.run(() => {
                console.log('LOGOUT');
            });
        });*/
        this.isLoading = true;
        SocialLogin.loginWithFacebook((result) => {
            this.ngZone.run(() => {
                console.log("code: " + result.code);
                console.log("error: " + result.error);
                console.log("userToken: " + result.userToken);
                console.log("displayName: " + result.displayName);
                console.log("photo: " + result.photo);
                console.log("authToken: " + result.authToken);
                
                if(result.code == 0) {
                    this.authService.facebook({access_token: result.authToken}).subscribe(
                        (res) => {
                            this.isLoading = false;
                            console.log('res', res);
                            this.authService.setToken(res);
                        },
                        (error) => {
                            this.isLoading = false;
                            let { error: { err: { message } } } = error;
                            console.log('Error', error, message);
                        }
                    );
                } else {
                    this.isLoading = false;
                    console.log('facebook Login error');
                }
            });
        });
    }

    google() {
        console.log('google');
        this.isLoading = true;
        SocialLogin.loginWithGoogle((result) => {
            this.ngZone.run(() => {
                console.log("code: " + result.code);
                console.log("error: " + result.error);
                console.log("userToken: " + result.userToken);
                console.log("displayName: " + result.displayName);
                console.log("photo: " + result.photo);
                console.log("authToken: " + result.authToken);
                console.log("id: " + result.id);
                
                console.log("result: ", result);

                if(result.code == 0) {
                    this.authService.google({idtoken: result.authToken}).subscribe(
                        (response) => {
                            this.isLoading = false;
                            console.log('response', response);
                            this.authService.setToken(response);
                        },
                        (error) => {
                            this.isLoading = false;
                            let { error: { err: { message } } } = error;
                            console.log('Error', error, message);
                        }
                    );
                } else {
                    this.isLoading = false;
                    console.log('Google Login error');
                }
                
            });
        });
    }

}
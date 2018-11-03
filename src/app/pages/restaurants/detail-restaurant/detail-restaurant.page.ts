import { Component , OnInit } from "@angular/core";
import { PlatformLocation } from '@angular/common';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RouterExtensions, } from 'nativescript-angular/router';

import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

import { alert, confirm } from "tns-core-modules/ui/dialogs";

import * as appUtils from "~/common/app-utils";
import * as Toast from 'nativescript-toast';

import { RestaurantService, RestaurantI, CommentI } from '../../../shared';

@Component({
    selector: 'app-detail-restaurant',
    moduleId: module.id,
    templateUrl: './detail-restaurant.page.html',
    styleUrls: ['./detail-restaurant.page.scss']
})
export class DetailRestaurantPage implements OnInit {

    paramsId: number;
    isLoading: boolean = false;
    restaurant = <RestaurantI>{};
    ratingTotal: any = null;
    commentForm: FormGroup;
    comments: CommentI[] = [];

    constructor(public routerExtensions: RouterExtensions, private pageRoute: PageRoute, private restaurantS: RestaurantService, private location : PlatformLocation, public fb: FormBuilder) {
        this.commentForm = this.fb.group({
            comment: ['', Validators.required],
            rating: [0, Validators.required],
        });
    }

    ngOnInit(): void {
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => { 
            this.paramsId = params["id"]; 
            console.log('this.paramsId', this.paramsId);
            
            this.isLoading = true;
            this.getRestaurantDetail();
            this.getRestaurantComments();
        });

        this.location.onPopState(() => {
            this.isLoading = true;
            this.getRestaurantDetail();
            this.getRestaurantComments();
        });
    }

    getRestaurantDetail() {
        this.restaurantS.getRestaurantXId(this.paramsId).subscribe(
          (response) => {
            this.isLoading = false;
            this.restaurant = response.restaurant;
            //console.log('getRestaurantXId', this.restaurant);
          },
          (error) => {
            this.isLoading = false;
            console.log(error);
          }
        );
    }

    getRestaurantComments() {
        this.restaurantS.getCommentsXId(this.paramsId).subscribe(
          (response) => {
            this.isLoading = false;
            this.comments = response.comments;
            //console.log('getCommentsXId', this.comments);
            
            if(this.comments.length !== 0) {
              this.comments.forEach(comment => {
                this.ratingTotal = this.ratingTotal + comment.rating;
              });
      
              this.ratingTotal = Math.round(this.ratingTotal / this.comments.length);
            } else {
              this.ratingTotal = 0;
            }
            
            //console.log('this.ratingTotal', this.ratingTotal)
          },
          (error) => {
            this.isLoading = false;
            console.log(error);
          }
        );
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

    publishComment() {
        //this.commentForm.setValue({restaurant: this.paramsId});
        appUtils.dismissSoftKeybaord();
        if (this.commentForm.invalid) {
          this.alert("Por favor, ingrese la puntuación y su comentario.");
          return;
        }

        this.commentForm.value.restaurant = this.paramsId;
        this.restaurantS.createComment(this.commentForm.value).subscribe(
          (response) => {
            this.ratingTotal = null;
            this.commentForm.reset()
            this.commentForm.value.rating = 0;
            this.isLoading = true;
            this.getRestaurantComments();
          },
          (error) => {
            console.log(error);
          }
        );
    }

    deleteRestaurant() {
      let options = {
        title: "Restaurant App",
        message: "¿Estás seguro de eliminar este restaurante?",
        okButtonText: "Si",
        cancelButtonText: "Cancelar"
      };
    
      confirm(options).then((result: boolean) => {
        if(result) {
          this.restaurantS.deleteRestaurant(this.paramsId).subscribe(
            (response) => {
              this.routerExtensions.backToPreviousPage();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
    }

    goToRestaurantEdit() {
        this.routerExtensions.navigate(["/main/edit-restaurant", this.paramsId]);
    }

}

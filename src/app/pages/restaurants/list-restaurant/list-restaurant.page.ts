import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { SearchBar } from "ui/search-bar";
import { isAndroid } from "platform";
import { Page } from "ui/page"

import { DrawerService, RestaurantService, RestaurantI } from "~/app/shared";

@Component({
    selector: "app-list-restaurant",
    moduleId: module.id,
    templateUrl: "./list-restaurant.page.html",
    styleUrls: ['./list-restaurant.page.scss']
})
export class ListRestaurantPage implements OnInit {

    isLoading: boolean = false;
    restaurants: RestaurantI[] = [];
    filteredRestaurants: RestaurantI[] = [];

    constructor(public drawerService: DrawerService, private routerExtensions: RouterExtensions, private page: Page, private restaurantS: RestaurantService) { }

    ngOnInit(): void {
        // Init your component properties here.
        this.getRestaurants();
    }

    getRestaurants() {
        this.isLoading = true;
        this.restaurantS.getRestaurants().subscribe(
          (response) => {
            this.restaurants = response.restaurants;
            this.filteredRestaurants = response.restaurants;
            this.isLoading = false;
            console.log('this.restaurants', this.restaurants)
          },
          (err) => {
            this.isLoading = false;
            console.log(err)
          }
        );
    }

    onDrawerButtonTap(): void {
        this.drawerService.toggle();
    }

    onSearchBarLoaded(event) {
        var searchbar: SearchBar = <SearchBar>event.object;
        if (isAndroid) {
            searchbar.android.clearFocus();
        }
    }

    onSubmit(value) {
        var searchbar: SearchBar = <SearchBar>this.page.getViewById("searchbarid");
        searchbar.dismissSoftInput();
        
        //console.log("value" + value);
        if(this.restaurants.length > 0) {
            this.filteredRestaurants = this.restaurants.filter(item => item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
        }
    }

    onClear(args) {
        this.filteredRestaurants = this.restaurants;

        var searchbar: SearchBar = <SearchBar>args.object;
        setTimeout(() => { searchbar.dismissSoftInput(); }, 100);
    }

    addRestaurant() {
        //this.navCtrl.navigateForward('/main/add-restaurant');
        this.routerExtensions.navigate(["/main/add-restaurant"], {
            transition: { name: 'slide', curve: 'linear'}
        });
    }

    goToRestaurantDetail(restaurant) {
        console.log('goToRestaurantDetail', restaurant)
        this.routerExtensions.navigate(["/main/detail-restaurant", restaurant._id], {
            transition: { name: 'slide', curve: 'linear'}
        });
    }
}

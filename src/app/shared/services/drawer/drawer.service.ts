import { Injectable } from '@angular/core';
import { SideDrawerType } from 'nativescript-ui-sidedrawer/angular';

@Injectable()
export class DrawerService {

    public drawer: SideDrawerType;

    public toggle() {
        if (this.drawer) {
            console.log("DrawerService.toggle", this.drawer.getIsOpen());
            if(!this.drawer.getIsOpen()) {
                console.log(`Open Drawer`);
                this.drawer.toggleDrawerState();
            } else {
                console.log(`Close Drawer`);
                this.drawer.closeDrawer();
            }
        } else {
            console.log("DrawerService.toggle: this.drawer was undefined");
        }
    }
}
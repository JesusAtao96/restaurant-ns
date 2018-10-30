import * as application from "application";
import { isIOS, isAndroid } from "platform";
import * as utils from "utils/utils";

declare var UIApplication, android;

export function dismissSoftKeybaord() {
    if (isIOS) {
        utils.ios.getter(UIApplication, UIApplication.sharedApplication)
            .keyWindow
            .endEditing(true);
    }
    if (isAndroid) {
        const dialogFragment = application.android
            .foregroundActivity
            .getFragmentManager()
            .findFragmentByTag("dialog");
        if (dialogFragment) {
            utils.ad.dismissSoftInput(dialogFragment.getDialog().getCurrentFocus());
        } else {
            utils.ad.dismissSoftInput();
        }
    }
}
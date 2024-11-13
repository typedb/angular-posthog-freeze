/*
 * This unpublished material is proprietary to Vaticle.
 * All rights reserved. The methods and
 * techniques described herein are considered trade secrets
 * and/or confidential. Reproduction or distribution, in whole
 * or in part, is forbidden except by express written permission
 * of Vaticle.
 */

import { bootstrapApplication } from "@angular/platform-browser";
import { RootComponent } from "./root.component";
import { APP_INITIALIZER } from "@angular/core";
import posthog from "posthog-js";

function appInitializer() {
    return () => Promise.resolve().then(() => {
        // The page freezes indefinitely by default.
        // Commenting out this call to posthog.init fixes the issue.
        posthog.init(
            "phc_kee7J4vlLnef61l6krVU8Fg5B6tYIgSEVOyW7yxwLSk",
            {
                api_host: "https://us.i.posthog.com",
                ui_host: "https://us.posthog.com",
                person_profiles: "always",
                capture_pageview: false,
                capture_pageleave: true,
            }
        );
    }).catch((err) => {
        console.error(`Error: ${err}`);
    });
}

bootstrapApplication(RootComponent, {
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
        },
    ]
});

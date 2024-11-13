import { Component } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: "app-root",
    templateUrl: "./root.component.html",
    standalone: true,
    imports: [MatTableModule, MatMenuModule, MatButtonModule],
})
export class RootComponent {
    rowPopupMenuItems = () => [];
}

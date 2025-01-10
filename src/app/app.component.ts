import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router   } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidenavService } from './components/sidenav/sidenav.service';

import { DefaultSidenavComponent } from './sidenavs/default-sidenav/default-sidenav.component';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component'
import { NavbarComponent } from '../app/components/navbar/navbar.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    public sidenavService: SidenavService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.sidenavService.push(DefaultSidenavComponent);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}

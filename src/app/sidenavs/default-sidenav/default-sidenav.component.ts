import { Component } from '@angular/core';
import { SidenavLinkComponent } from '../../components/sidenav-link/sidenav-link.component'


import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-default-sidenav',
  standalone: true,
  imports: [MatIconModule, SidenavLinkComponent],
  templateUrl: './default-sidenav.component.html',
  styleUrl: './default-sidenav.component.scss',
})
export class DefaultSidenavComponent {

}

import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {RouterLink} from '@angular/router';
import { Router } from '@angular/router';
import {NgClass} from '@angular/common';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-narbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    RouterLink,
    NgClass
  ],
  templateUrl: './narbar.component.html',
  styleUrl: './narbar.component.scss'
})
export class NarbarComponent  {

  selectedOption: string = 'Comparison'; // Giá trị mặc định
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.updateSelectedOption();
      }
    });
  }

  selectOption(option: string, route: string) {
    this.selectedOption = option;
  }

  updateSelectedOption() {
    const routeMapping: { [key: string]: string } = {
      '/1-process': 'One PRC',
      '/2-process': 'Two PRC',
      '/6-process': 'Six PRC'
    };
    this.selectedOption = routeMapping[this.currentRoute] || 'Comparison';
  }
  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}

import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    electronAPI: {
      minimizeWindow: () => void;
      maximizeWindow: () => void;
      unmaximizeWindow: () => void;
      closeWindow: () => void;
      isMaximized: () => Promise<boolean>;
    };
  }
}

@Component({
  selector: 'app-custom-title-bar',
  templateUrl: './custom-title-bar.component.html',
  styleUrls: ['./custom-title-bar.component.css']
})
export class CustomTitleBarComponent implements OnInit {
  isMaximized: boolean = false;
  windowTitle: string = 'My App';

  constructor() { }

  ngOnInit(): void {
    console.log('Window electronAPI:', window.electronAPI);

    if (window.electronAPI) {
      window.electronAPI.isMaximized().then((result) => {
        this.isMaximized = result;
      });
    }
  }

  minimize() {
    if (window.electronAPI) {
      window.electronAPI.minimizeWindow();
    }
  }

  toggleMaximizeRestore() {
    if (window.electronAPI) {
      window.electronAPI.isMaximized().then((result) => {
        this.isMaximized = result;

        if (this.isMaximized) {
          window.electronAPI.unmaximizeWindow();
        }
        else {
          window.electronAPI.maximizeWindow();
        }
      });
    }
  }

  close() {
    if (window.electronAPI) {
      window.electronAPI.closeWindow();
    }
  }

  toggleNavigation() {
    console.log('Navigation toggled');
  }
}

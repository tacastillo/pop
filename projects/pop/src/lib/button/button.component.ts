import { Component, Input, AfterContentInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pop-button',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements AfterContentInit {

  /**
   * Whether or not to use the primary or secondary color for the button
   */
  @Input('type') type: 'primary' | 'secondary' = 'primary';

  /**
	 * Relative size of the button
	 */
  @Input('size') size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Whether or not the button is disabled
   */
  @Input('disabled') disabled = false;

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    this.elementRef.nativeElement.classList.add(this.size);
  }

  buttonOver(event, didClick) {
    console.log(event, this);
    // if (didClick)
  }

}

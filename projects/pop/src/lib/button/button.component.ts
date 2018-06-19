import { Component, Input, AfterContentInit, ElementRef, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'pop-button',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopButton implements AfterContentInit, OnChanges {

  /**
   * Whether or not to use the primary or secondary color for the button
   */
  @Input('type') type: 'primary' | 'secondary' = 'primary';

  /**
	 * Relative size of the button
	 */
  @Input('size') size: 'icon' | 'sm' | 'md' | 'lg' = 'md';

  /**
   * Whether or not the button is disabled
   */
  @Input('disabled') disabled = false;

  constructor(public elementRef: ElementRef) { }

  ngAfterContentInit(): void {
    this.addClasses();
  }

  ngOnChanges(): void {
    this.elementRef.nativeElement.classList = [];
    this.addClasses();
  }

  /**
   * Adds the `size`, `type`, and `disabled` classes to the button
   * Factored out and called in `ngAfterContentInit` and `ngOnChanges`
   */
  private addClasses(): void {
    this.elementRef.nativeElement.classList.add(this.size);
    this.elementRef.nativeElement.classList.add(this.type);

    if (this.disabled) {
      this.elementRef.nativeElement.classList.add('disabled');
    }
  }

}

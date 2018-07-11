import {
	Component,
	Input,
	AfterContentInit,
	ElementRef,
	ViewEncapsulation,
	OnChanges,
	Renderer2,
	SimpleChanges
} from '@angular/core';

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

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
	}

	ngAfterContentInit(): void {
		this.addClasses();
		console.log(this);
	}

	ngOnChanges(changes: SimpleChanges): void {
		for (const key in changes) {
			if (!changes[key].firstChange) {
				const property = changes[key];
				let className = property.previousValue;
				if (key === 'disabled') {
					className = property.previousValue ? 'disabled' : '';
				}
				if (className.length > 0) {
					this.renderer.removeClass(this.elementRef.nativeElement, className);
				}
			}
		}
		this.addClasses();
	}

	/**
	 * Adds the `size`, `type`, and `disabled` classes to the button
	 * Factored out and called in `ngAfterContentInit` and `ngOnChanges`
	 */
	private addClasses(): void {
		this.renderer.addClass(this.elementRef.nativeElement, this.size);
		this.renderer.addClass(this.elementRef.nativeElement, this.type);

		if (this.disabled) {
			this.renderer.addClass(this.elementRef.nativeElement, 'disabled');
		}
	}
}

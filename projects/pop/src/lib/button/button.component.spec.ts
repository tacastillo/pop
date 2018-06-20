import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopButton } from './button.component';
import { Component, ViewChild } from '@angular/core';

/**
 * Wrapper component to trigger changes on button
 */
@Component({
	selector: 'pop-button-host',
	template:
		'<pop-button [disabled]="disabled" [size]="size" [type]="type"></pop-button>'
})
class PopButtonHost {
	@ViewChild(PopButton) public button: PopButton;

	public disabled = false;
	public size: 'icon' | 'sm' | 'md' | 'lg' = 'md';
	public type: 'primary' | 'secondary' = 'primary';
}

beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [PopButton, PopButtonHost]
	}).compileComponents();
}));

describe('PopButton', () => {
	let component: PopButton;
	let fixture: ComponentFixture<PopButton>;

	beforeEach(() => {
		fixture = TestBed.createComponent(PopButton);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should apply the `size` if passed in a `size`', () => {
		// Arrange
		component.size = 'lg';

		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).toContain('lg');
	});

	it('should default to "md" if no `size` is defined', () => {
		// Arrange
		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).toContain('md');
	});

	it('should apply the `type` if passed in a `type', () => {
		// Arrange
		component.type = 'secondary';

		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).toContain('secondary');
	});

	it('should default to "primary" if no `type` is defined', () => {
		// Arrange
		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).toContain('primary');
	});

	it('should default to enabled if no `disabled` is not defined', () => {
		// Arrange
		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).not.toContain('disabled');
	});

	it('should disable button if `disabled` is set to true', () => {
		// Arrange
		component.disabled = true;

		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).toContain('disabled');
	});

	it('should not disable button if `disabled` is not defined', () => {
		// Arrange
		// Act
		fixture.detectChanges();

		// Assert
		const classList = Array.from(
			fixture.debugElement.nativeElement.classList
		);
		expect(classList).not.toContain('disabled');
	});
});

describe('PopButton State Changes', () => {
	let hostFixture: ComponentFixture<PopButtonHost>;
	let hostComponent: PopButtonHost;

	beforeEach(() => {
		hostFixture = TestBed.createComponent(PopButtonHost);
		hostComponent = hostFixture.componentInstance;
	});

	it('should be able to enable a disabled button', () => {
		// Arrange
		hostComponent.disabled = true;
		hostFixture.detectChanges();

		// Act
		hostComponent.disabled = false;
		hostFixture.detectChanges();

		// Assert
		const classList = Array.from(hostComponent.button.nativeEl.classList);
		expect(classList).not.toContain('disabled');
	});

	it('should be disable a button after its instantiated', () => {
		// Arrange
		hostFixture.detectChanges();

		// Act
		hostComponent.disabled = true;
		hostFixture.detectChanges();

		// Assert
		const classList = Array.from(hostComponent.button.nativeEl.classList);
		expect(classList).toContain('disabled');
	});
});

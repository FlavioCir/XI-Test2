import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms"

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    form!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            heroForm: this.fb.group({
                name: this.fb.control(null, [Validators.required]),
                alterEgo: this.fb.control(null, [Validators.required]),
                planet: this.fb.control(null, [Validators.required]),
                enemy: this.fb.control(null, [Validators.required])
            }),
            weakness: this.fb.array([]),
            powers: this.fb.array([])
        });
    }

    getErrorsC(name: string, error: string) {
        return this.form.get(name)?.errors![error];
    }

    getFormC(name: string) {
        return this.form.get(name);
    }

    getPowersF() {
        return (this.form.get('powers') as FormArray).controls;
    }

    addPowers() {
        const control = this.fb.control(null);
        (this.form.get('powers') as FormArray).push(control);
    }

    getWeaknessF() {
        return (this.form.get('weakness') as FormArray).controls;
    }

    addWeakness() {
        const control = this.fb.control(null);
        (this.form.get('weakness') as FormArray).push(control);
    }

    submit() {
        console.log(this.form.value);
        console.log('Form correttamente inviato');
        this.form.reset();
    }
}

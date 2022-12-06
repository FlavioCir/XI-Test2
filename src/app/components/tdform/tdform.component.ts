import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-tdform',
    templateUrl: './tdform.component.html',
    styleUrls: ['./tdform.component.scss']
})
export class TdformComponent implements OnInit {

    @ViewChild('form', { static: true }) form!: NgForm;

    constructor() { }

    ngOnInit(): void {
        this.form.statusChanges?.subscribe(status => {
            console.log('Stato del form: ', status);
        })
    }

    heroForm: any = {
        name: '',
        alterEgo: '',
        power: '',
        enemy: '',
        planet: '',
        weakness: ''
    }

    submit(form: NgForm) {
        console.log('Form inviato: ', form.value);
        this.form.reset();
    }
}

import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() faIcon: string;
  @Input() variant: string;
  @Input() btnType: string;
  @Input() hasFullWidth: boolean;

  hasIcon: boolean;
  componentClass: string;
  btnVariants = {
    default: 'btn',
    primary: 'btn btn--primary',
    reset: 'btn btn--reset',
    green: 'btn btn--green'
  };

  btnTypes = {
    button: 'button',
    submit: 'submit',
    reset: 'reset'
  };

  constructor() { }

  ngOnInit(): void {
    this.componentClass = this.hasFullWidth ? this.btnVariants[this.variant] + ' btn--full-width' : this.btnVariants[this.variant]; 
    this.hasIcon = this.faIcon ? true : false;
    this.faIcon = 'fa fa-' + this.faIcon;
  }

}

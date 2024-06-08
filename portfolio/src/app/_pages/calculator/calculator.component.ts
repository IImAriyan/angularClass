import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstArgument: number | undefined
  secondArgument: number | undefined
  equal: string | undefined
  operation: string | undefined
  result: number | undefined

  selectNumber(num: number) {
    if (this.operation) {
      this.secondArgument = num
    }else {
      this.firstArgument = num
    }
  }

  selectOperation(operation: string) {
    this.operation = operation
  }
  clear() {
    this.operation = undefined;
    this.firstArgument = undefined;
    this.secondArgument = undefined;
    this.equal = undefined;
    this.result = undefined;
  }
  selectEqual() {
    if (this.secondArgument != undefined && this.firstArgument != undefined && this.operation != undefined) {
      this.equal = "=";
      if (this.operation == "+") {
        this.result = this.firstArgument + this.secondArgument;
      }
      if (this.operation == "-") {
        this.result = this.firstArgument - this.secondArgument;
      }
      if (this.operation == "/") {
        this.result = this.firstArgument / this.secondArgument;
      }
      if (this.operation == "*") {
        this.result = this.firstArgument * this.secondArgument;
      }
    }
  }    
  
}

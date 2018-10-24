import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan';
import { PlanServicesService } from '../service/plan-services.service';
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css'],
  providers:[PlanServicesService]
})
export class PaybillComponent implements OnInit {
  plans : Plan[];
  single : Plan;
  pid: number;
  selected : Plan;
  constructor(private service: PlanServicesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Hellooo");

    this.activatedRoute.params.subscribe(
      (params) => {
         this.pid = params['id'];
        if (this.pid) {
          this.service.getPlanById(this.pid).subscribe(
            (data) => this.single = data,
            (err)=>this.single=undefined
          );
          console.log("done");
        }
        else{
          console.log("What the fuck?");
        }
      }
    );
  }
  // payBill(){
  //   this.service.payBill(this.pid).subscribe(
  //     (data)=>this.selected = data,
  //     (err)=>this.selected=undefined
  //   );

  // }

}

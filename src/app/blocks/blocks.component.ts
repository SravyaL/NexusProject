import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan';
import { PlanServicesService } from '../service/plan-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
  providers: [PlanServicesService]
})
export class BlocksComponent implements OnInit {

  plans: Plan[];
  single : Plan;
  pid: number;
  type: string;
  amount: number;
  validity: number;
  dataUsage: number;
  dataSpeed: number;
  voiceInMin: number;

  constructor(
    private service: PlanServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        let id = params['id'];

        if (id) {
          this.service.getPlanById(id).subscribe(
            (data) => this.single = data,
            (err) => this.single = undefined
          );
        } else {
          this.service.getAllPlans().subscribe(
            (data) => this.plans = data,
            (err) => this.plans = undefined
          )
        }
      }
    );


  }

  pay(pid) {
    this.pid=pid;
    var murl = `payBill/${this.pid}`;
    this.router.navigateByUrl(murl);
//     this.service.payBill(this.pid).subscribe(
// (data)=>{
//   this.router.navigateByUrl(murl);
    
//   }
//     );
}
}

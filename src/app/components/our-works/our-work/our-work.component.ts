import {Component, Input} from '@angular/core';
import {Work} from "../our-works.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {OurWorkModalDetails} from "../our-work-modal-details/our-work-modal-details";

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
  providers: [NzModalService],
})
export class OurWorkComponent {
  @Input() public work!: Work;

  constructor(private modalService: NzModalService) {
  }

  public readMore() {
    this.modalService.create({
      nzTitle: 'Details',
      nzContent: OurWorkModalDetails,
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }
}

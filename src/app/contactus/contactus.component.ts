import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  inputEmail: any;
  title: any;
  messeage: any;
  typeMesseage: any;
  typeCampus: any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.inputEmail == null || this.title == null || this.messeage== null || this.typeMesseage == null || this.typeCampus == null) {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่มีข้อมูล',
        icon: 'error',
        confirmButtonText: 'ปิด'
      })
    } else {
      Swal.fire({
        title: 'ส่งแล้ว',
        text: 'ได้รับข้อมูลของคุณแล้ว',
        icon: 'success',
        confirmButtonText: 'ปิด'
      })
    }
  }

}

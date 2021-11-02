import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})

export class BookTableComponent {
  ItemsArray: any;
  closeResult: string;
  selectedItem: any;
  item: any;
  popupName: string;
  openPopup: boolean;
  submitted: boolean;
  content: any;

  open(content: any) {
    this.selectedItem = null;
    this.openPopup = true;
    this.popupName = 'Add Book';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(private modalService: NgbModal) { this.ItemsArray = []; }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.selectedItem) {
      let index = this.ItemsArray.indexOf(this.selectedItem);
      this.ItemsArray[index] = value;
      this.modalService.dismissAll();
    } else {
      this.ItemsArray.push(value);
      console.log(this.ItemsArray);
      this.modalService.dismissAll();
    }
  }

  onEdit(item: any, content: any) {
    this.openPopup = true;
    this.open(content);
    this.selectedItem = item;
    this.popupName = 'Edit Book';
  }

  clickMethod(book: string, index: number) {
    if (confirm('Are you sure to delete ' + book)) {
      this.ItemsArray.splice(index, 1);
    }
  }

}


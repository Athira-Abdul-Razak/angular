import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})

export class BookTableComponent {
  bookList: any;
  closePopup: string;
  selectedItem: any;
  titleName: string;
  submitted: boolean;
  content: any;

  onAdd(content: any) {
    this.selectedItem = null;
    this.titleName = 'Add Book';
    this.showPopup(content);
  }

  showPopup(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closePopup = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closePopup = `Dismissed ${this.getDismissReason(reason)}`;
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

  constructor(private modalService: NgbModal) { this.bookList = []; }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.selectedItem) {
      let index = this.bookList.indexOf(this.selectedItem);
      this.bookList[index] = value;
      this.modalService.dismissAll();
    } else {
      this.bookList.push(value);
      console.log(this.bookList);
      this.modalService.dismissAll();
    }
  }

  onEdit(item: any, content: any) {
    this.showPopup(content);
    this.selectedItem = item;
    this.titleName = 'Update Book';
  }

  clickMethod(book: string, index: number) {
    if (confirm('Are you sure to delete ' + book)) {
      this.bookList.splice(index, 1);
    }
  }

}


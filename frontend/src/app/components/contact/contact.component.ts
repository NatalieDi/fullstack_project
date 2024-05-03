import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  address: number;
  phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', address: 1.0079, phone: 'H'},
  {id: 2, name: 'Helium', address: 4.0026, phone: 'He'},
  {id: 3, name: 'Lithium', address: 6.941, phone: 'Li'},
  {id: 4, name: 'Beryllium', address: 9.0122, phone: 'Be'},
  {id: 5, name: 'Boron', address: 10.811, phone: 'B'},
  {id: 6, name: 'Carbon', address: 12.0107, phone: 'C'},
  {id: 7, name: 'Nitrogen', address: 14.0067, phone: 'N'},
  {id: 8, name: 'Oxygen', address: 15.9994, phone: 'O'},
  {id: 9, name: 'Fluorine', address: 18.9984, phone: 'F'},
  {id: 10, name: 'Neon', address: 20.1797, phone: 'Ne'},
];

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  displayedColumns: string[] = ['id', 'name', 'address', 'phone'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Email', 'pais', 'Id'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: InitServiceService, private router: Router) { }
  ngOnInit(): void {
    this.service.obtenerProcesos().toPromise().then((result: any) => {
      this.dataSource = new MatTableDataSource(result);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  modal() {
    this.router.navigate(['registrar/oferta'])
  }
  eliminar(id: number) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la oferta?',
      html: 'Recuerde que es una acción irreversible',
      showCloseButton: false,
      showDenyButton: true,
      confirmButtonColor: "#385065",
      denyButtonColor: "#CF4B39",
      focusConfirm: false,
      confirmButtonText:
        'Eliminar',
      confirmButtonAriaLabel: 'Eliminar',
      denyButtonText:
        'Cancelar',
      denyButtonAriaLabel: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        let dato = { Id: id }
        this.service.eliminarProcesos(dato).toPromise().then((res: any) => {
          Swal.fire('', 'Oferta eliminada exitosamente', 'success')
          this.service.obtenerUsuarios().toPromise().then((result: any) => {
            this.dataSource = new MatTableDataSource(result);

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          })
        })
      } else if (result.isDenied) {
      }
    })
  }
  editar(id: any) {
    this.service.informacion = id;
    if (id.parent == "0") {
      this.router.navigate(['editar/empresa'])
    } else {
      this.router.navigate(['editar/usuario'])
    }
  }

}

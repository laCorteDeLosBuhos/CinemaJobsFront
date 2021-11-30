import { AfterViewInit, Component, OnInit, ViewChild ,} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit  {
  
  displayedColumns: string[] = ['Nombre', 'Email', 'telefono', 'pais', 'ciudad','TipoUsuario','Id'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:InitServiceService,private router:Router) { }
  ngOnInit(): void {
    this.service.obtenerUsuarios().toPromise().then((result:any)=>{
      this.dataSource=new MatTableDataSource(result);
      
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
  modal(){
    Swal.fire({
      title: '¿Que tipo de usuario deseas agregar?',
      icon: 'info',
      html:'',
      showCloseButton: false,
      showDenyButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Administrador',
      confirmButtonAriaLabel: 'Administrador',
      denyButtonText:
        'Empresa',
        denyButtonAriaLabel: 'Empresa'
    }).then((result)=>{
      if(result.isConfirmed){
        this.router.navigate(['registrar/usuario'])
      }else if(result.isDenied){
        this.router.navigate(['registrar/empresa'])
      }
    })
  }
}

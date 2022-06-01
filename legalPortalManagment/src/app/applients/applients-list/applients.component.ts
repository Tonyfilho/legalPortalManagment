import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IApplientClass } from 'src/assets/interfaces/appient';
import { ApplientsService } from '../applients.service';

@Component({
  selector: 'app-applients',
  templateUrl: './applients.component.html',
  styleUrls: ['./applients.component.css'],
})
export class ApplientsComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'NomeCompleto',
    'Email',
    'Telemovel',
    'Nacionalidade',
    'DataDeEntrada',
    'Edit'
  ];
  listaDeNome = 'uma listaaaaaaaaaaaaaaaaaaaaaa de nomes com o maior de todooooooooooos no mundo';
  dataSource!: MatTableDataSource<IApplientClass>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private applientService: ApplientsService) {}
 
  ngOnInit(): void {
    this.applientService.localApplients$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);    
    });

    /**Codigo para retornar o maior de uma string */
    const maior = this.listaDeNome.split(' ').reduce((novo, atual, i) => {
      if(novo.length < atual.length) { return atual};        
      return novo
    }, ' ');
    
    /**Codigo para retornar o menor de uma string */
    const menor = this.listaDeNome.split(' ').reduce((novo, atual)=> {     
     if(novo.length < atual.length) { return novo; };
     return atual;
    }, ' ');
    const menor2 = this.displayedColumns.reduce((novo, atual:any)=> {     
     if(novo.length < atual.length) { return novo; };
     return atual;
    },"tenho que escrever um string de return caso contrario ele retorna vazio, ou não retornar nada, sem retorno" );
 
    console.log('O maior: ',maior);
    console.log('O menor: ',menor);
    console.log('O menor: ',menor2);


  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

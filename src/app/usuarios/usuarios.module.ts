import { NgModule } from '@angular/core';

// Módulos
import { CommonModule } from '@angular/common';

// Componentes
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [ListaComponent, UsuarioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }

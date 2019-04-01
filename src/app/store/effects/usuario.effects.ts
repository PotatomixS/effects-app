import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()

export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) {};

    @Effect()
    cargarUsuario$ = this.actions$
        .pipe(
            ofType( usuarioActions.CARGAR_USUARIO ),
            switchMap( action => {
                const id = action['id'];
                return this.usuarioService.getUserById(id)
                    .pipe(
                        map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                        catchError( error => of(new usuarioActions.CargarUsuarioFail(error)) )
                    )
            })
        )
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { LavaJatoComponent } from './components/lava-jato/lava-jato.component';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';

@NgModule({
	declarations: [
		AppComponent,
		EntradaComponent,
		SaidaComponent,
		PesquisarComponent,
		RelatorioComponent,
		LavaJatoComponent,
		ManutencaoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
	bootstrap: [AppComponent]
})
export class AppModule { }

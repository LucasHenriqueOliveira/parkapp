import { Routes } from '@angular/router';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { LavaJatoComponent } from './components/lava-jato/lava-jato.component';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';


export const ROUTES: Routes = [
	{path: '', redirectTo: 'entrada', pathMatch: 'full'},
	{ path: 'entrada', component: EntradaComponent },
	{ path: 'saida', component: SaidaComponent },
	{ path: 'pesquisar', component: PesquisarComponent },
	{ path: 'relatorio', component: RelatorioComponent },
	{ path: 'lava-jato', component: LavaJatoComponent },
	{ path: 'manutencao', component: ManutencaoComponent }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent      /*Modifica-se aqui e adiciona para criar mais de uma página no mesmo site, redirecionamneto ou no contexto mais específico, ao clicar na notícia amplia para os detalhes do texto em outra guia*/
  },
  {
    path:'content/:id',            /* essa modificação se faz presente para que o conteúdo acessado na home tenha ligação com o da página content */
    component: ContentComponent
  },
  {
    path: '**',
    redirectTo: ''         /* Adicionado para redirecionar urls inválidas da página para a home page*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

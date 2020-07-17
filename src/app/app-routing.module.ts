import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedGuard as AuthGuard} from './guards/index';

const routes: Routes = [
	{
    path: '',
    loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/join-us/join-us-page.module').then(m => m.JoinUsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/calendar/calendar-page.module').then(m => m.CalendarPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/advice-and-links/advice-and-links-page.module').then(m => m.AdviceAndLinksPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/self-growth/self-growth-page.module').then(m => m.SelfGrowthPageModule)
  },



  {
    path: '',
    loadChildren: () => import('./pages/register/register-page.module').then(m => m.RegisterPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login-page.module').then(m => m.LoginPageModule)
  },


  {
    path: '',
    loadChildren: () => import('./pages/article/article-page.module').then(m => m.ArticlePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/external-article/external-article-page.module').then(m => m.ExternalArticlePageModule)
  },


  {
    path: '',
    loadChildren: () => import('./pages/event/event-page.module').then(m => m.EventPageModule)
  },


  {
    path: '',
    loadChildren: () => import('./pages/tag-search/tag-search-page.module').then(m => m.TagSearchPageModule)
  },

  {
    path: 'auth',
    children: [
      // PROFILE
      {
        path: '',
        loadChildren: () => import('./pages/authenticated/profile/profile-page.module').then(m => m.ProfilePageModule),
        canLoad: [AuthGuard]
      },

      // ARTICLES
      {
        path: '',
        loadChildren: () => import('./pages/authenticated/add-article/add-article-page.module').then(m => m.AddArticlePageModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        loadChildren: () => import('./pages/authenticated/add-external-article/add-external-article-page.module').then(m => m.AddExternalArticlePageModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        loadChildren: () => import('./pages/authenticated/list-articles/list-articles-page.module').then(m => m.ListArticlesPageModule),
        canLoad: [AuthGuard]
      },

      // EVENTS
      {
        path: '',
        loadChildren: () => import('./pages/authenticated/add-event/add-event-page.module').then(m => m.AddEventPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        loadChildren: () => import('./pages/authenticated/list-events/list-events-page.module').then(m => m.ListEventsPageModule),
        canLoad: [AuthGuard]
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

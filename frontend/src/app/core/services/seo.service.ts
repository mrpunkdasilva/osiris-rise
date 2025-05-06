import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['title']) {
        this.updateTitle(data['title']);
      }
      
      if (data['description']) {
        this.updateDescription(data['description']);
      }
      
      if (data['ogImage']) {
        this.updateOgImage(data['ogImage']);
      }
    });
  }

  updateTitle(title: string): void {
    const fullTitle = `${title} | Osiris Rise`;
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'twitter:title', content: fullTitle });
  }

  updateDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'twitter:description', content: description });
  }

  updateOgImage(imageUrl: string): void {
    const fullImageUrl = `https://osirisrise.com${imageUrl}`;
    this.metaService.updateTag({ property: 'og:image', content: fullImageUrl });
    this.metaService.updateTag({ property: 'twitter:image', content: fullImageUrl });
  }

  updateCanonicalUrl(url?: string): void {
    const canURL = url || this.router.url;
    const fullUrl = `https://osirisrise.com${canURL}`;
    
    let link: HTMLLinkElement = this.metaService.getTag('rel="canonical"')?.element as HTMLLinkElement;
    
    if (link) {
      link.href = fullUrl;
    } else {
      const head = document.getElementsByTagName('head')[0];
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', fullUrl);
      head.appendChild(link);
    }
  }
}
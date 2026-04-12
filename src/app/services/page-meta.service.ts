import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang } from './language.service';

interface PageMetaConfig {
  title: string;
  description: string;
  path: string;
  lang: Lang;
  keywords: string;
  alternatePath: string;
}

@Injectable({ providedIn: 'root' })
export class PageMetaService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly siteUrl = 'https://wesleyzilva.github.io/portfolioNearshoreWesIA';
  private readonly defaultImage = `${this.siteUrl}/assets/wesley.jpg`;

  update(config: PageMetaConfig): void {
    const canonicalUrl = config.path ? `${this.siteUrl}/${config.path}` : `${this.siteUrl}/`;
    const locale = config.lang === 'pt' ? 'pt_BR' : 'en_US';

    this.title.setTitle(config.title);
    this.document.documentElement.lang = config.lang === 'pt' ? 'pt-BR' : 'en';

    this.updateNamedMeta('description', config.description);
    this.updateNamedMeta('keywords', config.keywords);
    this.updateNamedMeta('twitter:title', config.title);
    this.updateNamedMeta('twitter:description', config.description);
    this.updateNamedMeta('twitter:image', this.defaultImage);

    this.updatePropertyMeta('og:title', config.title);
    this.updatePropertyMeta('og:description', config.description);
    this.updatePropertyMeta('og:url', canonicalUrl);
    this.updatePropertyMeta('og:image', this.defaultImage);
    this.updatePropertyMeta('og:locale', locale);

    this.updateLink('canonical', canonicalUrl);
    const enHref = config.alternatePath ? `${this.siteUrl}/${config.alternatePath}` : `${this.siteUrl}/`;
    const ptHref = config.alternatePath ? `${this.siteUrl}/pt/${config.alternatePath}` : `${this.siteUrl}/pt`;
    const defaultHref = enHref;

    this.updateLink('alternate', enHref, 'en');
    this.updateLink('alternate', ptHref, 'pt-BR');
    this.updateLink('alternate', defaultHref, 'x-default');
  }

  private updateNamedMeta(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private updatePropertyMeta(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private updateLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]`;
    let element = this.document.head.querySelector(selector) as HTMLLinkElement | null;

    if (!element) {
      element = this.document.createElement('link');
      element.setAttribute('rel', rel);
      if (hreflang) {
        element.setAttribute('hreflang', hreflang);
      }
      this.document.head.appendChild(element);
    }

    element.setAttribute('href', href);
  }
}
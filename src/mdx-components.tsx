import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/article';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    table: ({ children, ...props }) => <div className="table-scroll" tabIndex={0} role="region" aria-label="표"><table {...props}>{children}</table></div>,
    ...components,
  };
}

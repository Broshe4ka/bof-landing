import type { MDXComponents } from 'mdx/types';

function MDXWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mdx container">{children}</div>;
}

export function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    wrapper: MDXWrapper,
    ...components,
  };
}

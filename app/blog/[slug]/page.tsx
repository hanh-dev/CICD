// app/blog/[slug]/page.tsx

type PageProps = {
  params: {
    slug: string;
  };
};

// generateMetadata
export async function generateMetadata({ params }: PageProps) {
  return {
    title: `Post: ${params.slug}`,
  };
}

// Component Page
export default function Page({ params }: PageProps) {
  return <h1>Slug: {params.slug}</h1>;
}

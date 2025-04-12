'use client';

export const BlogSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Blog</h2>
        <p className=" text-muted-foreground mb-8">
          Confira nossos artigos sobre direito trabalhista e fique por dentro dos
          seus direitos.
        </p>
        {/* Add blog content here */}
        <div>Em breve, mais conteúdos!</div>
      </div>
    </section>
  );
};

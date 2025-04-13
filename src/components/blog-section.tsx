'use client';

export const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Blog</h2>
        <p className="text-muted-foreground mb-8">
          Acompanhe nossos artigos sobre direito trabalhista e mantenha-se
          atualizado sobre seus direitos.
        </p>
        {/* Add blog content here */}
        <div className="text-muted-foreground">Em breve, mais conteúdos!</div>
      </div>
    </section>
  );
};

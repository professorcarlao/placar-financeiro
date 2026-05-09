import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-[#F7E135] selection:text-black">
      <Header />
      <main className="container max-w-4xl px-4 pt-32 pb-20">
        <div className="mb-8">
          <Button asChild variant="ghost" className="hover:bg-campo/5 -ml-4">
            <Link to="/" className="flex items-center gap-2 text-campo/60 hover:text-campo">
              <ArrowLeft className="h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>

        <h1 className="font-display text-4xl text-campo sm:text-6xl mb-4">Termos de Uso</h1>
        <p className="text-sm font-medium text-campo/60 mb-12">Última atualização: maio de 2026</p>

        <div className="space-y-10 prose prose-campo max-w-none">
          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">1. Sobre estes termos</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Estes Termos de Uso regulam o acesso à landing page do Finanças em Campo.</p>
              <p>Ao navegar por esta página, você concorda com as condições descritas abaixo.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">2. Finalidade da landing page</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>A landing page tem finalidade informativa e apresenta o Finanças em Campo, um app de controle financeiro pessoal simples e visual.</p>
              <p>A página mostra os principais recursos do app, como Placar do Mês, lances, objetivos, gastos fixos, assinaturas, parcelamentos e estatísticas.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">3. Acesso ao app</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Os botões da página podem direcionar o visitante para o ambiente do app Finanças em Campo.</p>
              <p>O uso do app pode exigir criação de conta e fornecimento de informações necessárias para funcionamento da ferramenta.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">4. Organização financeira, não consultoria</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>O Finanças em Campo é uma ferramenta de organização financeira pessoal.</p>
              <p>As informações apresentadas na landing page e no app têm finalidade educativa e organizacional. Elas não constituem consultoria financeira, recomendação de investimento, aconselhamento jurídico, contábil ou tributário.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">5. Responsabilidade do usuário</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>O usuário é responsável pelas informações que registra no app e pelas decisões tomadas a partir da sua própria organização financeira.</p>
              <p>O Finanças em Campo ajuda a visualizar dados e acompanhar o mês, mas não garante resultados financeiros específicos.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">6. Disponibilidade e alterações</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Podemos atualizar textos, funcionalidades, recursos, páginas e condições de uso a qualquer momento, buscando melhorar a experiência do usuário.</p>
              <p>Também podemos realizar ajustes técnicos, manutenções ou alterações na disponibilidade da página e do app.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">7. Propriedade intelectual</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>A marca Finanças em Campo, o personagem Professor Carlão, textos, elementos visuais, identidade da página e demais conteúdos pertencem aos seus respectivos titulares.</p>
              <p>Não é permitido copiar, reproduzir ou utilizar esses elementos sem autorização.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">8. Links externos</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>A página pode conter links para o app ou para outros ambientes relacionados ao Finanças em Campo.</p>
              <p>Ao acessar páginas externas ou ambientes diferentes da landing page, o usuário estará sujeito às regras específicas desses serviços.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">9. Alterações destes termos</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Estes Termos de Uso podem ser atualizados periodicamente. A versão mais recente estará sempre disponível nesta página.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">10. Contato</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo canal oficial informado no site ou no app Finanças em Campo.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;

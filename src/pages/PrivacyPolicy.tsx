import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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

        <h1 className="font-display text-4xl text-campo sm:text-6xl mb-4">Política de Privacidade</h1>
        <p className="text-sm font-medium text-campo/60 mb-12">Última atualização: maio de 2026</p>

        <div className="space-y-10 prose prose-campo max-w-none">
          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">1. Sobre esta política</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Esta Política de Privacidade explica como a landing page do Finanças em Campo trata informações relacionadas ao acesso ao site.</p>
              <p>Esta página tem finalidade informativa e apresenta o app Finanças em Campo. Ela não solicita cadastro, não possui formulário e não coleta dados financeiros do visitante.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">2. Dados coletados nesta landing page</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>A landing page do Finanças em Campo não solicita nome, e-mail, telefone, dados bancários, cartão de crédito ou informações financeiras pessoais.</p>
              <p>Ao navegar pelo site, podem ser tratados dados técnicos básicos de acesso, como endereço IP, tipo de navegador, dispositivo utilizado e informações necessárias para segurança, funcionamento e proteção da página.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">3. Uso de cookies e tecnologias técnicas</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>O site pode utilizar tecnologias essenciais para funcionamento, segurança, desempenho e proteção contra acessos indevidos, inclusive recursos fornecidos por serviços de hospedagem, DNS, segurança ou CDN.</p>
              <p>Essas informações são usadas para manter a página acessível, segura e funcionando corretamente.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">4. Quando você acessa o app</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Ao clicar em botões como “Criar conta” ou “Ver meu placar grátis”, você poderá ser direcionado para o ambiente do app Finanças em Campo.</p>
              <p>No ambiente do app, poderão ser solicitadas informações necessárias para criação de conta e uso da ferramenta. Essas informações não são coletadas diretamente por esta landing page.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">5. Dados financeiros</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>A landing page não coleta nem armazena dados financeiros do visitante.</p>
              <p>Caso o usuário crie uma conta no app e registre informações financeiras, esses dados serão tratados dentro do ambiente do aplicativo, conforme as regras aplicáveis ao uso da ferramenta.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">6. Compartilhamento de informações</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>A landing page não vende dados pessoais.</p>
              <p>Informações técnicas de acesso podem ser processadas por serviços necessários para hospedagem, segurança, análise de funcionamento ou infraestrutura do site.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">7. Segurança</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Adotamos medidas razoáveis para manter a página segura e disponível. Ainda assim, nenhum ambiente digital é totalmente livre de riscos.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">8. Alterações nesta política</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças no site, no app ou em requisitos legais.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-campo mb-4 uppercase tracking-tight">9. Contato</h2>
            <div className="space-y-4 text-campo/80 font-medium leading-relaxed">
              <p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo canal oficial informado no site ou no app Finanças em Campo.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

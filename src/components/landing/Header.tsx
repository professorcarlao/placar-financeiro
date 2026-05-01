import { Button } from "@/components/ui/button";
import { Goal } from "lucide-react";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#faq", label: "Dúvidas" },
];

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linha/10 bg-campo/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-linha">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-apito-gradient text-campo">
            <Goal className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl tracking-wide">
            Finanças em Campo
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-linha/75 transition-colors hover:text-apito"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="apito" size="sm" className="rounded-full px-5">
          <a href="#cadastro">Criar conta grátis</a>
        </Button>
      </div>
    </header>
  );
};
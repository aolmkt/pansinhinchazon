import { Helmet } from "react-helmet-async";

const TermosServico = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Serviço – Respondedor de Comentários</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-white text-black px-4 py-10 max-w-2xl mx-auto font-sans text-base leading-relaxed">
        <h1 className="text-2xl font-bold mb-2">Termos de Serviço – Respondedor de Comentários</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: 09 de fevereiro de 2026</p>

        <p className="mb-6">
          Ao utilizar o aplicativo "Respondedor de Comentários" (ID 463649850113538) em conjunto com a Página do Facebook "Maria Aguero" (ID 530365783500251), você concorda com estes Termos de Serviço. Leia com atenção.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Sobre o aplicativo</h2>
        <p className="mb-4">
          O "Respondedor de Comentários" é uma ferramenta privada desenvolvida e operada exclusivamente por mim (Elton) para gerenciar comentários públicos na minha própria página do Facebook chamada Maria Aguero.
        </p>
        <p className="mb-4">
          O aplicativo funciona automaticamente: recebe notificações de novos comentários (via webhook do Facebook), analisa se o comentário está relacionado a um anúncio patrocinado e publica respostas curtas geradas por inteligência artificial.
        </p>
        <p className="mb-6">
          O aplicativo NÃO é público, NÃO possui login de usuários, NÃO tem interface para o público final e NÃO requer instalação ou cadastro por terceiros.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Aceitação dos termos</h2>
        <p className="mb-4">
          Ao publicar um comentário na página Maria Aguero, você automaticamente aceita estes Termos de Serviço, pois o aplicativo pode responder ao seu comentário público usando IA.
        </p>
        <p className="mb-6">
          Se você não concorda com estes termos, basta não comentar na página ou excluir seu comentário a qualquer momento.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Uso permitido</h2>
        <p className="mb-4">
          Você pode usar a página Maria Aguero normalmente: comentar, curtir, compartilhar e interagir como qualquer usuário do Facebook.
        </p>
        <p className="mb-6">
          O aplicativo pode responder automaticamente aos seus comentários públicos se eles forem feitos em anúncios patrocinados ou posts selecionados. As respostas são geradas por IA e visam ser amigáveis, úteis e positivas.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Limitações e responsabilidades</h2>
        <p className="mb-4">
          O aplicativo responde apenas comentários públicos. Não acessa mensagens privadas, perfis, emails ou qualquer informação privada.
        </p>
        <p className="mb-4">
          As respostas geradas por IA podem não ser perfeitas. Elas são automáticas e não representam necessariamente minha opinião pessoal em todos os casos.
        </p>
        <p className="mb-6">
          Você é responsável pelo conteúdo que publica na página. Comentários ofensivos, spam ou que violem as regras do Facebook podem ser moderados ou reportados normalmente pela plataforma.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Propriedade intelectual</h2>
        <p className="mb-6">
          O aplicativo, o código, o design e as respostas geradas por IA são de minha propriedade exclusiva. Você não pode copiar, modificar, distribuir ou usar o aplicativo para outros fins sem autorização.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Isenção de responsabilidade</h2>
        <p className="mb-4">
          O aplicativo é fornecido "como está", sem garantias de funcionamento perfeito ou respostas 100% corretas. Não me responsabilizo por danos causados por uso da página ou interações com respostas automáticas.
        </p>
        <p className="mb-6">
          O Facebook é responsável pela moderação geral da página e pode remover comentários ou respostas a qualquer momento conforme suas próprias regras.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Alterações nos termos</h2>
        <p className="mb-6">
          Posso atualizar estes Termos de Serviço a qualquer momento. A versão mais recente estará sempre publicada nesta página. Continuar interagindo com a página após atualizações significa que você aceita as mudanças.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Lei aplicável e contato</h2>
        <p className="mb-4">Estes termos são regidos pelas leis do Brasil. Qualquer dúvida ou reclamação pode ser enviada para:</p>
        <p className="mb-1">Email: contato@pansinhinchazon.com</p>
        <p className="mb-6">Site: <a href="https://pansinhinchazon.com/" className="underline">https://pansinhinchazon.com/</a></p>

        <p className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
          Ao continuar usando ou interagindo com a página Maria Aguero, você confirma que leu, entendeu e concorda com estes Termos de Serviço.
        </p>
      </div>
    </>
  );
};

export default TermosServico;

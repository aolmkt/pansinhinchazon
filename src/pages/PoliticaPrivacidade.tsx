import { Helmet } from "react-helmet-async";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade – Respondedor de Comentários</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-white text-black px-4 py-10 max-w-2xl mx-auto font-sans text-base leading-relaxed">
        <h1 className="text-2xl font-bold mb-2">Política de Privacidade – Respondedor de Comentários</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: 09 de fevereiro de 2026</p>

        <p className="mb-6">
          Esta Política de Privacidade explica como o aplicativo "Respondedor de Comentários" (ID do aplicativo no Meta: 463649850113538) coleta, usa, armazena e protege informações ao interagir exclusivamente com a Página do Facebook "Maria Aguero" (ID da página: 530365783500251).
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Sobre o aplicativo</h2>
        <p className="mb-4">
          O "Respondedor de Comentários" é uma ferramenta privada desenvolvida e utilizada exclusivamente por mim para gerenciar comentários públicos na minha própria página do Facebook chamada Maria Aguero.
        </p>
        <p className="mb-4">
          O aplicativo funciona de forma automática: recebe notificações de novos comentários (via webhook do campo "feed" do Facebook), analisa se o comentário está relacionado a um anúncio patrocinado e, quando aplicável, gera e publica respostas curtas e amigáveis usando inteligência artificial.
        </p>
        <p className="mb-6">
          O aplicativo NÃO é público, NÃO possui login de usuários finais, NÃO tem interface acessível ao público e NÃO requer instalação ou cadastro por parte de terceiros.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Informações coletadas</h2>
        <p className="mb-3">Coletamos APENAS as seguintes informações públicas enviadas pelo Facebook por meio do webhook:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Texto do comentário publicado pelo usuário.</li>
          <li>Nome visível do autor do comentário (como exibido publicamente no Facebook).</li>
          <li>ID do comentário e ID do post ou anúncio ao qual o comentário foi feito.</li>
          <li>Data e hora em que o comentário foi criado.</li>
        </ul>

        <p className="mb-3">Não coletamos, em nenhuma hipótese:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Email, telefone, endereço, foto de perfil, data de nascimento, localização ou qualquer outro dado pessoal privado.</li>
          <li>Informações de usuários que não comentaram na página.</li>
          <li>Dados de outras páginas do Facebook ou de terceiros.</li>
          <li>Histórico de navegação, cookies ou rastreamento de comportamento fora da página Maria Aguero.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Finalidade da coleta e uso das informações</h2>
        <p className="mb-3">As informações coletadas são usadas exclusivamente para:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Identificar novos comentários na página Maria Aguero.</li>
          <li>Verificar se o comentário está relacionado a um anúncio patrocinado (através de campos como is_published e promotion_status).</li>
          <li>Gerar uma resposta automática, curta, positiva e adequada ao contexto usando inteligência artificial.</li>
          <li>Publicar essa resposta diretamente como reply ao comentário original (quando a permissão pages_manage_engagement estiver autorizada).</li>
        </ul>
        <p className="mb-6">
          Todas as informações são processadas em tempo real e descartadas imediatamente após o uso. Não armazenamos comentários, respostas ou dados de usuários de forma permanente.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Compartilhamento de dados</h2>
        <p className="mb-6">
          Não compartilhamos, vendemos, transferimos ou divulgamos qualquer informação coletada a terceiros. O processamento ocorre integralmente no meu servidor privado (hospedado na Hetzner, com Docker e Traefik), e os dados não são enviados para outras empresas ou serviços além das APIs oficiais do Meta necessárias ao funcionamento.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Armazenamento e segurança</h2>
        <p className="mb-4">
          Os dados são processados temporariamente durante a execução do aplicativo (geralmente segundos ou poucos minutos) e descartados logo após.
        </p>
        <p className="mb-6">
          O servidor utiliza HTTPS em todas as conexões, firewall, atualizações regulares e boas práticas de segurança. Não existe armazenamento permanente de comentários ou dados pessoais.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Direitos dos usuários</h2>
        <p className="mb-4">
          Como o aplicativo interage apenas com comentários públicos que você mesmo publica na página Maria Aguero, você já controla o conteúdo diretamente no Facebook (pode editar ou excluir seu comentário a qualquer momento).
        </p>
        <p className="mb-4">
          O aplicativo não tem capacidade de acessar, alterar ou excluir dados privados sem as permissões apropriadas do Facebook.
        </p>
        <p className="mb-6">
          Se desejar questionar o processamento de algum comentário seu, entre em contato pelo email abaixo.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Alterações nesta política</h2>
        <p className="mb-6">
          Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível nesta página. Recomendamos verificar de tempos em tempos. Mudanças significativas serão comunicadas na página Maria Aguero quando aplicável.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Contato</h2>
        <p className="mb-2">Dúvidas, sugestões ou solicitações sobre esta política podem ser enviadas para:</p>
        <p className="mb-1">Email: contato@pansinhinchazon.com</p>
        <p className="mb-6">Site: <a href="https://pansinhinchazon.com/" className="underline">https://pansinhinchazon.com/</a></p>

        <p className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
          Ao continuar interagindo com a página Maria Aguero, você reconhece e concorda com os termos desta Política de Privacidade.
        </p>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;

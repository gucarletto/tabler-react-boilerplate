import * as React from "react";

import { Error500Page } from "tabler-react";

type Props = {};

function Error500(props: Props) {
  return <Error500Page
          subtitle="Oops... Ocorreu um erro inesperado..."
          details="Por hora recomendamos a ação abaixo"
          action="Voltar"
         />;
}

export default Error500;
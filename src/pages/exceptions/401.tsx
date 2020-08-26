
import * as React from "react";

import { Error401Page } from "tabler-react";

type Props = {};

function Error401(props: Props) {
  return <Error401Page
            subtitle="Oops... Você não tem autorização para acessar esse recurso..."
            details="Por hora recomendamos a ação abaixo"
            action="Voltar"
          />;
}

export default Error401;
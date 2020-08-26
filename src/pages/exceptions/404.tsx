import * as React from "react";

import { Error404Page } from "tabler-react";

type Props = {};

function Error404(props: Props) {
  return <Error404Page
            subtitle="Oops... Você chegou em um lugar ainda não desenvolvido..."
            details="Por hora recomendamos a ação abaixo"
            action="Voltar"
         />;
}

export default Error404;
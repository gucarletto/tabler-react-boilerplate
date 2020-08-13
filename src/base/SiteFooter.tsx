import React from "react";

import { Site, Grid, List } from "tabler-react";

const SiteFooter = () => {
  return (
    <Site.Footer
      copyright={
        <React.Fragment />
      }
      nav={
        <React.Fragment>
          <Grid.Col auto={true}>
            <List className="list-inline list-inline-dots mb-0">
              <List.Item className="list-inline-item">
                <a href="./docs/index.html">Documentação</a>
              </List.Item>
            </List>
          </Grid.Col>
        </React.Fragment>
      }
      note="Premium and Open Source dashboard template with responsive and high quality UI. For Free!"
    />
  );
};

export default SiteFooter;
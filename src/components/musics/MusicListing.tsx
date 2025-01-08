import * as React from 'react';
import { css } from '@emotion/react';
import Container from '@components/UI/Container';
import Row from '@components/UI/Row';

const wrapper = css`
  background: #000001;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-top: 60px;
`;

const MusicListing = ({ edges }: { edges: any }) => {
  return (
    <section css={wrapper}>
      <Container>
        <Row>
          {edges.map((item: any, index: number) => (
            <iframe
              key={index}
              width="100%"
              height="450"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${item.node.frontmatter.media_src}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MusicListing;

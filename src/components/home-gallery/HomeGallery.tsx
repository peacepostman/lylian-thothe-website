import React, { useRef, useState, useEffect, ReactNode } from 'react';
//import { css } from '@emotion/react';
//import Masonry from 'masonry-layout';
import MuxPlayer from '@mux/mux-player-react';
import Modal from 'react-modal';
import '@mux/mux-player/themes/microvideo';

import { Script } from 'gatsby';

import data from './../../contents/home-gallery.json';

import { work, workItem, workItemHover, workModal, workModalClose, workPlay, gridSizer } from './HomeGallery.style';

Modal.setAppElement('#___gatsby');

const HomeGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>();

  // useEffect(() => {
  //   if (workGallery) {
  //     var msnry = new Masonry(workGallery, {
  //       itemSelector: '[data-item]',
  //       columnWidth: '[data-grid-sizer]',
  //       gutter: 10,
  //     });
  //   }
  // }, [workGallery]);

  return (
    <>
      <Script id="masonry" src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" />
      <section css={work}>
        <div data-masonry='{ "itemSelector": "[data-item]", "columnWidth": "[data-grid-sizer]", "gutter": 10 }'>
          <div data-grid-sizer css={gridSizer}></div>
          {data.map((item: any, index: number) => (
            <div data-item key={index} css={[workItem(item.format), { backgroundImage: `url("/static/gallery/${item.image}")` }]}>
              <button
                css={workPlay}
                onClick={() => {
                  setModalContent(
                    item.media_type === 'mux' ? (
                      <MuxPlayer theme="microvideo" playbackId={item.media_src} accentColor="#FF0000" autoPlay />
                    ) : (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.media_src}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=1`}
                        title={item.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    )
                  );
                  setIsOpen(true);
                }}
              >
                <svg width="24" height="24" fill="currentColor">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" />
                </svg>
              </button>

              <div css={workItemHover}>
                <h4>{item.name}</h4>
                {item.tags && (
                  <ul>
                    {item.tags.map((tag: string) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          setModalContent(null);
        }}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(2px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          },
          content: {
            background: '#000',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            border: 'none',
            outline: 'none',
            aspectRatio: '16 / 9',
            margin: 'auto',
            maxWidth: '1080px',
            overflow: 'initial',
            width: '95%',
          },
        }}
        contentLabel="Example Modal"
      >
        <button
          css={workModalClose}
          type="button"
          onClick={() => {
            setIsOpen(false);
            setModalContent(null);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
          </svg>
        </button>
        <div css={workModal}>{modalContent}</div>
      </Modal>
    </>
  );
};

export default HomeGallery;

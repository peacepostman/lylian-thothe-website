import * as React from 'react';
import { Script, type HeadFC, type PageProps } from 'gatsby';
import { css } from '@emotion/react';
import Container from '../../components/UI/Container';
import Row from '../../components/UI/Row';
import Col from '../../components/UI/Col';
import Button from '../../components/UI/Button';
import Toast, { ToastArea } from '../../components/UI/Toast/Toast';
import Hero from '../../components/hero';

const contact = css`
  background: #000001;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const title = css`
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 35px;
`;

const input = css`
  height: 50px;
  width: 100%;
  border: 1px solid rgba(225, 225, 225, 0.5);
  background: transparent;
  font-size: 16px;
  color: #adadad;
  padding-left: 20px;
  font-weight: 300;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all, 0.3s;

  &:focus {
    border-color: #e1e1e1;
  }

  &::placeholder {
    color: #adadad;
  }
`;

const textarea = css`
  height: 110px;
  width: 100%;
  border: 1px solid rgba(225, 225, 225, 0.5);
  background: transparent;
  font-size: 16px;
  color: #adadad;
  padding-top: 12px;
  padding-left: 20px;
  font-weight: 300;
  margin-bottom: 14px;
  resize: none;
  transition: all, 0.3s;

  &:focus {
    border-color: #e1e1e1;
  }

  &::placeholder {
    color: #adadad;
  }
`;

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero small title="LYLIAN THOTHE - Music Visual Composer" description="Contact me if you would like to start working together !" />
      <section css={contact} className="contact">
        <Script id="form_listener">
          {`
          const form = document.getElementById("form");
          if (form) {
            form.addEventListener("submit", formSubmit);
            function formSubmit(e) {
                e.preventDefault();
                const formData = new FormData(e.target);
                fetch("https://getform.io/f/bwnggoka", {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json",
                    },
                })
                .then((response) => {
                  const toastSuccess = document.querySelector('.toast-success');
                  const toastFail = document.querySelector('.toast-error');
                  if (response.ok && response.status === 200) {
                    form.reset();
                    if (toastSuccess) {
                      toastSuccess.setAttribute('data-displayed', 'true');
                      setTimeout(() => {
                        toastSuccess.setAttribute('data-displayed', 'false');
                      }, 2000);
                    }
                  } else {
                    toastFail.setAttribute('data-displayed', 'true');
                    setTimeout(() => {
                      toastFail.setAttribute('data-displayed', 'false');
                    }, 2000);
                  }
                })
                .catch(error => console.log(error))
            }
          }
        `}
        </Script>
        <Container>
          <Row>
            <Col sm={12}>
              <div className="contact__form">
                <h3 css={title}>Contact Me</h3>
                <form method="POST" acceptCharset="UTF-8" id="form">
                  <input css={input} type="text" name="name" placeholder="Name" />
                  <input css={input} type="email" name="email" placeholder="Email" />
                  <input type="hidden" name="_gotcha" style={{ display: 'none' }}></input>
                  <textarea css={textarea} name="message" placeholder="Message"></textarea>
                  <Button type="submit">Send</Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastArea>
          <Toast type="success" message="Your message has been sent !" visible={false} />
          <Toast type="error" message="An error occured" visible={false} />
        </ToastArea>
      </section>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Lylian Thothe - Contact</title>;

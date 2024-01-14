import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function LoginForm() {
  const { t } = useTranslation();
  return (
    <Container className="container">
      <Row className="row">
        <Col md={6} className="col mx-auto">
          <div className="header">
            <h1 className="text-white">{t("common.login")}</h1>
          </div>
          <Form className="mt-4 pt-5" autoComplete="off">
            <Form.Group className="sizeField mb-3 form-group">
              <Form.Control disabled type="text" placeholder={t("common.emailOrPhoneNumber")} className="form-control" />
            </Form.Group>
            <Form.Group className="sizeField mb-5 lastInput">
              <Form.Control disabled type="password" placeholder={t("common.password")} className="form-control" autoComplete="new-password" />
            </Form.Group>

            <Button type="submit" className="buttonSubmit ">{t("common.login")}</Button>
            <div className="sizeField text-grey mt-3">
              <Form.Check type="checkbox" label={t("common.rememberMe")} inline className="fs13 chechboxInput text-grey" />
              <span className="float-end fs13 text-grey">{t("common.needHelp")}</span>
            </div>
            <div className="sizeField pt-2">
              <p className="text-left text-grey mt-3 fs13">
                {t("common.newHere")}
                <a href="/" className="text-white ahref fs13">{t("common.subscribeNow")}</a>
              </p>
              <p className="text-left text-grey fs13 pt-2" >
                {t("common.reCaptcha.message")}
                <a href="/" className="small-text ahref text-blue">{t("common.knowMore")}</a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;

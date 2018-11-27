import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import axios from 'axios';
import Page from 'components/Page';

class EditSalesmanPage extends Component {
  state = {
    name: '',
    wechatId: '',
    level: '',
    address: '',
    phone: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const { name, wechatId, level, address, phone } = this.state
    const salesmanData = {
      name,
      wechatId,
      level,
      address,
      phone
    }
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    axios.put('http://localhost:3001/salesmen', salesmanData, { headers: headers })
      .then(() => {
        this.props.history.push('/salesman-list')
      })
      .catch(err => console.log('err', err))
  }

  render() {
    const { name, wechatId, level, address, phone } = this.state
    return (
      <Page
        title="Edit Salesman"
        breadcrumbs={[{ name: 'Edit Salesman', active: true }]}>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Create Salesman</CardHeader>
              <CardBody>
                <Form onSubmit={this.onFormSubmit}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.onChange}
                      id="name"
                      placeholder="Enter salesman name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="wechatid">Wechat Id</Label>
                    <Input
                      type="text"
                      name="wechatId"
                      value={wechatId}
                      onChange={this.onChange}
                      id="wechatid"
                      placeholder="Enter salesman wechat Id"
                    />
                  </FormGroup>
                  {/* <FormGroup>
                    <Label for="level">Level</Label>
                    <Input
                      type="text"
                      name="level"
                      value={level}
                      onChange={this.onChange}
                      id="level"
                      placeholder="Enter salesman level"
                    />
                  </FormGroup> */}
                  <FormGroup tag="fieldset" row>
                    <Label for="checkbox2" sm={2}>
                      Level
                  </Label>
                    <Col sm={10} style={{ marginBottom: '0px' }}>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="level" value="level 1" checked={level === "level 1"} onChange={this.onChange} /> Level 1
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="level" value="level 2" checked={level === "level 2"} onChange={this.onChange} /> Level 2
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="level" value="level 3" checked={level === "level 3"} onChange={this.onChange} /> Level 3
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="level" value="level 4" checked={level === "level 4"} onChange={this.onChange} /> Level 4
                      </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      value={address}
                      onChange={this.onChange}
                      id="address"
                      placeholder="Enter salesman address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                      id="phone"
                      placeholder="Enter salesman phone number"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" type="submit" block>Submit</Button>
                  </FormGroup>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default EditSalesmanPage

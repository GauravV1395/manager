import React, { Component } from "react";
import _ from "lodash";
import { Card, CardSection, Button, Confirm } from "./common";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import Communications from "react-native-communications";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.textWithoutEncoding(
      phone,
      `Your upcoming shift is on ${shift}.`
    );
  }

  onFirePress() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} children="Save" />
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)} children="Text" />
        </CardSection>
        <CardSection>
          <Button onPress={this.onFirePress.bind(this)} children="Fire" />
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);

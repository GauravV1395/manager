import React, { Component } from "react";
import { Card, CardSection, Button } from "./common/index";
import { employeeUpdate, employeeCreate } from "../actions";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" }); // if shift is not provided default it to monday.
  }

  render() {
    // { ...this.props } is used to say to get access to all the props of the component. Here, all the props are being sent to the EmployeeForm component.
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
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
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);

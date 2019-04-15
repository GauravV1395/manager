import React, { Component } from "react";
import { Card, CardSection, Input, Spinner, Button } from "./common/index";
import { employeeUpdate, employeeCreate } from "../actions";
import { connect } from "react-redux";
import { Picker, Text } from "react-native";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" }); // if shift is not provided default it to monday.
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Rama"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="9876543210"
            value={this.props.value}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);

import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            titleStyle={[styles.common, { textAlign: "center" }]}
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            titleStyle={[styles.common, { textAlign: "center", left: 30 }]}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            titleStyle={[styles.common, { textAlign: "center", right: 35 }]}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  common: {
    flex: 1,
    textAlign: "right"
  }
};

export default RouterComponent;

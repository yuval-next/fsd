import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SdfghjklList } from "./sdfghjkl/SdfghjklList";
import { SdfghjklCreate } from "./sdfghjkl/SdfghjklCreate";
import { SdfghjklEdit } from "./sdfghjkl/SdfghjklEdit";
import { SdfghjklShow } from "./sdfghjkl/SdfghjklShow";
import { SadsaList } from "./sadsa/SadsaList";
import { SadsaCreate } from "./sadsa/SadsaCreate";
import { SadsaEdit } from "./sadsa/SadsaEdit";
import { SadsaShow } from "./sadsa/SadsaShow";
import { AaaaList } from "./aaaa/AaaaList";
import { AaaaCreate } from "./aaaa/AaaaCreate";
import { AaaaEdit } from "./aaaa/AaaaEdit";
import { AaaaShow } from "./aaaa/AaaaShow";
import { BbbList } from "./bbb/BbbList";
import { BbbCreate } from "./bbb/BbbCreate";
import { BbbEdit } from "./bbb/BbbEdit";
import { BbbShow } from "./bbb/BbbShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"sdfghjkl"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Sdfghjkl"
          list={SdfghjklList}
          edit={SdfghjklEdit}
          create={SdfghjklCreate}
          show={SdfghjklShow}
        />
        <Resource
          name="Sadsa"
          list={SadsaList}
          edit={SadsaEdit}
          create={SadsaCreate}
          show={SadsaShow}
        />
        <Resource
          name="Aaaa"
          list={AaaaList}
          edit={AaaaEdit}
          create={AaaaCreate}
          show={AaaaShow}
        />
        <Resource
          name="Bbb"
          list={BbbList}
          edit={BbbEdit}
          create={BbbCreate}
          show={BbbShow}
        />
      </Admin>
    </div>
  );
};

export default App;

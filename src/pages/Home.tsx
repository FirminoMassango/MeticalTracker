import {IonLabel} from '@ionic/react';
import Expense from '../components/Expense';
import CustomHeader from '../components/CustomHeader'


const Home: React.FC = () => {
  return (
    <>
      <CustomHeader/>
      <h1 style={{margin: "10px"}}>Despesas</h1>
      <Expense/>
      <Expense/>
      <Expense/>
      <Expense/>
      <Expense/>
      <Expense/>
    </>
  );
};

export default Home;

import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState, useEffect } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);
  const [entry, setEntry ] = useState();
  const {isOpen, id} = useSelector(state => state.modals)
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  useEffect(() => {
    let initialTotalIncome = 0;
    let initialTotalExpenses = 0;
    
    const {totalExpenses, totalIncome} = entries.reduce((previousValues, currentEntry) => {
      if(currentEntry.isExpense) {
        previousValues.totalExpenses += +currentEntry.value;
        return previousValues;
      }

      previousValues.totalIncome += +currentEntry.value;
      return previousValues;
    }, {totalIncome: initialTotalIncome, totalExpenses: initialTotalExpenses});

    setSumTotal(totalIncome - totalExpenses);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpenses);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, entries);

  
  useEffect(() => {
    dispatch(getAllEntries());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <Container>
      <MainHeader title='Budget'/>

      <DisplayBalance 
        color='black'
        title='Your Balance:'
        size='small'
        value={sumTotal}
      />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

      <MainHeader title='History' type='h3' />

      <EntryLines entries={entries} />
    
      <MainHeader title='Add new transction' type='h3' />
      <NewEntryForm />
      <ModalEdit 
        isOpen={isOpen} 
        {...entry}  
      />  
    </Container>
  );
}

export default App;

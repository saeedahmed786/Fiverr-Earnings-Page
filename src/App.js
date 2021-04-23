import { Grid, Paper } from '@material-ui/core';
import './App.css';
import { Payments } from './Payments';
import { Tabel } from './Tabel';
import { TabelFilters } from './TabelFilters';

function App() {
  return (
    <div className="App">
         <div>
             <p style = {{float: 'right', marginTop: '40px', fontSize: '14px'}}>Expected earnings: <b>$1,068</b></p>
             <h1 style = {{fontWeight: '400', fontSize: '40px', color: '#404145', paddingTop: '30px'}}>Earnings</h1>
         </div>
        <Grid container className = 'app-grid'>
          <Grid item xs={6} md = {2} sm = {4} style = {{marginRight: '60px'}}>
            <span>
            <small>Net Income</small>
               $153,988.23
            </span>
          </Grid>
          <Grid item xs={6} md = {2} sm = {4} style = {{marginRight: '30px'}}>
            <span>
            <small>Withdrawn</small>
               $147,006.23
            </span>
          </Grid>
          <Grid item xs={6} md = {2} sm = {4} style = {{marginRight: '30px'}}>
            <span>
            <small>Used for Purchases</small>
               $1,545
            </span>
          </Grid>
          <Grid item xs={6} md = {2} sm = {4} style = {{marginRight: '30px'}}>
            <span>
            <small>Pending Clearance</small>
               $2,703.20
            </span>
          </Grid>
          <Grid item xs={6} md = {2} sm = {4}>
            <span className = 'last-payment' style = {{borderRight: 'none', padding: '0px'}}>
            <small>Available for Withdrawal</small>
               $2,772.60
            </span>
          </Grid>
         
        </Grid>

        <Payments/>
        <TabelFilters/>
        <Tabel/>

    </div>
  );
}

export default App;

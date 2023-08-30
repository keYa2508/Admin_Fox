import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './Components/Login/Login';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import UserUpdation from './Components/Admin/UserUpdation/UserUpdation';
import AddUser from './Components/Admin/AddUser/AddUser';
import AdminTaskManagement from './Components/Admin/AdminTaskManagement/AdminTaskManagement';
import AdminReport from './Components/Admin/AdminReport/AdminReport';
import AdminAccount from './Components/Admin/AdminAccount/AdminAccount';
import AdminContent from './Components/Admin/AdminContent/AdminContent';
import TraineeDashboard from './Components/Trainee/TraineeDashboard/TraineeDashboard';
import TraineeProgress from './Components/Trainee/TraineeProgress/TraineeProgress';
import CandidateLogout from './Components/Candidate/CandidateLogout/CandidateLogout';
import Test from './Components/Tests/Test';
import CandidateTask from './Components/Candidate/CandidateTask/CandidateTask';
import AdminMenu from './Components/Admin/AdminMenu/AdminMenu';
import TraineeMenu from './Components/Trainee/TraineeMenu/TraineeMenu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>

          {/* For Admin pages */}
          <Route path='admin' element={<AdminMenu/>}>
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='userupdate' element={<UserUpdation/>}/>
          <Route path='adduser' element={<AddUser/>}/>
          <Route path='taskmanage' element={<AdminTaskManagement/>}/>
          <Route path='report' element={<AdminReport/>}/>
          <Route path='account' element={<AdminAccount/>}/>
          <Route path='contentupload' element={<AdminContent/>}/>
          </Route>

          {/* For Trainee pages */}
          <Route path='trainee' element={<TraineeMenu/>}>
          <Route path='dashboard' element={<TraineeDashboard/>}/>
          <Route path='progress' element={<TraineeProgress/>}/>
          </Route>

          {/* For Candidate pages */}
          <Route path='/candidate/tasks' element={<CandidateTask/>}/>
          <Route path='/candidate/logout' element={<CandidateLogout/>}/>

          {/* For Test Page */}
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
